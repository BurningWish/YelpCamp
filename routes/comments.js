var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware"); // will automatically require index.js

// ====================      COMMENTS ROUTES     ============================ //

// Comments New
router.get("/new", middleware.isLoggedIn, function(req, res){
    //find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }
        else{
            res.render("comments/new", {campground: campground});
        }
    });
});

// Create Comments
router.post("/", middleware.isLoggedIn, function(req, res){
    //look up campground using ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        }
        else{
            //create new comment
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    req.flash("error", "Something went wrong");
                    console.log(err);
                }
                else{
                    //connect new comment to campground
                    //add username and id to comment
                    comment.author.id = req.user._id; //because we are logged in now!
                    comment.author.username = req.user.username;
                    //save comment
                    comment.save();
                    campground.comments.push(comment);
                    campground.save();
                    console.log(comment);
                    //redirect to the show page of that campground
                    req.flash("success", "successfully added a comment ^_^");
                    res.redirect("/campgrounds/" + req.params.id);
                }
            });
        }
    });
});

// Edit Route
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
    Comment.findById(req.params.comment_id, function(err, foundComment){
        if(err){
            res.redirect("back");
        }
        else{
            // be careful that at this point req.params.id refers to the id of campground because of app.js
            res.render("comments/edit", {campground_id: req.params.id, comment: foundComment});
        }
    });
});

// Update Route
router.put("/:comment_id/", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
        if(err){
            res.redirect("back");
        }
        else{
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// Delete Route
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res){
    // find by id and remove
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
        if(err){
            res.redirect("back");
        }
        else{
            req.flash("success", "Successfully deleted a comment");
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

module.exports = router;