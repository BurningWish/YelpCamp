#YelpCamp

* Adding Landing Page
* Adding Campground Page that list all campgrounds

Each campground has:

* Name
* Image

#Layout and basic styling

* Create our header and footer partials
* Add in Bootstrap

#Creating New Campgrounds

* Setup new campground post route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

#Style the campgrounds page

* Add a better header/title
* Make campgrounds display in grid

#Style the Navbar and Form

* Add a navbar to all templates
* Style the new campground form

#Add Mongoose

* Install and configue mongoose
* Setup campgrounds model
* Use campgrounds model inside our routes!

#Show Page

* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

#Refactor Mongoose Code

* Create a models directory
* Use module.exports
* Require everything correctly

#Add seeds file

* Add a seeds file
* Run the seeds file every time you start server

#Add the Comment Model

* Make our errors go away
* Display comments on campground show page

#Comment New/Create

* Discuss Nested Routes
* Add the comment new and create routes
* Add the new comment form

#Style Show Page

* Add side bar to show page
* Display comments nicely

##Auth Pt.1 - Add User Model

* Install all packages that are needed for Auth
* Define user model

##Auth Pt.2 - Register

* Configure Passport
* Add Register Routes
* Add Register Template

##Auth Pt.3 - Login

* Add login routes
* Add login template

##Auth Pt.4 -  Logout/Navbar

* Add logout routes
* Prevent a user from adding a comment if not logged in
* Add links to navbar
* Show/hid auth links automatically

##Auth Pt.5 -  Show/hide links

* Show/hide auth links in navbar correctly (if you already logged in, you don't want to see login link again)

##Refactor the routes

* Use express router to reorganize all routes

##Users + Comments

* Associate users and comments
* Save the author's name to a comment automatically

##Users + Campgrounds

* Prevent an un-authenticated user from creating a campground
* Save username + id to newly created campground

##Editing Campgrounds

* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route
* Fix $set problem

##Deleting Campgrounds

* Add Destroy Route
* Add Delete Button

##Authorization - Part1. Campgrounds

* User can only edit his or her campground
* User can only delete his or her campground
* Hide/Show edit and delete buttons

##Editing Comments

* Add Edit routes for comments
* Add Edit button
* Add Update route

/campgrounds/:id/edit
/campgrounds/:id/comments/:comment_id/edit

##Deleting Comments

* Add Destroy Route
* Add Delete Button

##Authorization - Part2. Comments

* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit delete buttons
* Refactoring Middleware (make a new directory middleware)

##Adding in Flash!

* Demo Working Version
* Install and configure connect-flash
* Add boostrap alert to header