// all the middlewares of YelpCamp
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middlewareObj = {};

// This middleware is used to check if the user created the campground BEFORE you want to edit/update/destroy!
middlewareObj.checkCampgroundOwnership = function(req, res, next){
    if(req.isAuthenticated()){
            Campground.findById(req.params.id, function(err, foundCampground){
                if(err){
                    req.flash("error", "campground not found");
                    res.redirect("back");
                }
                else{
                // does the user own the campground?
                // be careful foundCampground.author.id is a mongoose object, req.user._id is a String
                    if(foundCampground.author.id.equals(req.user._id)){
                        next();
                    }
                    else{
                        req.flash("error", "You don't have permission to do that");
                        res.redirect("back");
                    }
                }
            });
    }
    else{
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
};

// This middleware is used to check if the user created the comment BEFORE you want to edit/update/destroy!
middlewareObj.checkCommentOwnership = function (req, res, next){
    if(req.isAuthenticated()){
            Comment.findById(req.params.comment_id, function(err, foundComment){
                if(err){
                    req.flash("error", "campground not found");
                    res.redirect("back");
                }
                else{
                // does the user own the comment?
                // be careful foundComment.author.id is a mongoose object, req.user._id is a String
                    if(foundComment.author.id.equals(req.user._id)){
                        next();
                    }
                    else{
                        req.flash("error", "You don't have permission to do that");
                        res.redirect("back");
                    }
                }
            });
    }
    else{
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
};

// middleware to check if a user is logged in
middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    // flash will occur in the redirecting page, which is really nice!
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
};

module.exports = middlewareObj;