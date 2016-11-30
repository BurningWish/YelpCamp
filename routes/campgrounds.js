var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware"); // will automatically require index.js

// =====================   Campgrounds Routes ==================================

//Index Route - Show all the campgrounds
router.get("/", function(req, res){
    //Get all campgrounds from DB
     Campground.find({}, function(err, allCampgrounds){
         if(err){
             console.log("error happened in finding campgrounds in db");
         }
         else {
             res.render("campgrounds/index", {campgrounds: allCampgrounds});
         }
     });
});

//Create Route - Add a new campground to the database
router.post("/", middleware.isLoggedIn, function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var price = req.body.price;
    var author = {
      id: req.user._id,
      username: req.user.username
    };
    var newCampGround = {name: name, image: image, description: desc, price: price, author: author};
    //Create a new campground and save it to the database
    Campground.create(newCampGround, function(err, newlyCreated){
        if(err){
            console.log("have error in adding a new campground");
        }
        else {
            console.log(newlyCreated);
            //redirect back to campgorunds page
            res.redirect("/campgrounds");
        }
    });
});

//New Route - Display a form of making a new campground
router.get("/new", middleware.isLoggedIn, function(req, res){
    //find the campground with provided id, then render a page
    res.render("campgrounds/new");
});

//Show Route - Show more info of about ONE(!) campground
router.get("/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log("Something went wrong when you try to get a campground");
        }
        else {
            console.log(foundCampground);
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// Edit Route
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

// Update Route
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
    // find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        }
        else{
            // redirect somewhere (show page)
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// Destroy Route
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    // find and delete the correct campground
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        }
        else {
            req.flash("success", "Successfully deleted a campground")
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;