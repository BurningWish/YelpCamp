# YelpCamp
A RESTful web application for user to add their favourite camping grounds and or make their comments. 
It is developed based on NodeJS and ExpressJS.
The web app is deployed at Heroku and accessible via the following link.
https://murmuring-spire-28538.herokuapp.com/

## Initial Setup
* Setup the entry point (app.js)
* Add a landing page
* Setup Index route to show all the campgrounds
* Add Campgrounds page which lists all the camping grounds

Each campground has:
* A name
* An image

## Layout and Basic Styling
* Create the header and footer partials
* Add in Bootstrap

## Creating new campgrounds
* Setup POST route to add a new campground
* Add in body-parser
* Setup NEW route to show the form of adding a new campground
* Add basic unstyled form

## Style the Campgrounds page
* Add a better header/title
* Make campgrounds display in a Bootstrap grid

## Style the Navbar and the Form
* Add a navbar to all the ejs templates
* Style the new campground form

## Add mongoose
* Install and configure mongooose
* Setup campground model
* Use campground model inside the routes

## Show page
* Add descriptions to the campground model
* Setup SHOW route to show a single campground
* Add a show ejs template

## Refactor mongoose code
* Create a models directory
* Use module.exports
* Require models in app.js

## Add the comment model
* Define comment model
* Display comments on campground show page

## Comment NEW/CREATE
* Use nested routes
* Setup CREATE route for comment
* Setup NEW route for comment
* Add the new comment form

## Style campground show page
* Add sidebar to the show page
* Display comments nicely

## Finish styling show page
* Add public directory
* Add custom stylesheet

## Auth Pt.1 - Add user model
* Install all the packages for user authentication (passportJS, passport-local, passport-local-mongoose)
* Define user model

## Auth Pt.2 - Register
* Configure passportJS
* Add register routes (POST and GET)
* Add a register ejs template to show the regiter form

## Auth Pt.3 - Login
* Add login routes
* Add a login ejs template to show the login form

## Auth Pt.4 - Logout/Navbar 
* Add logout route
* Define middleware
* Use middleware to prevent user from adding a comment if not logged in
* Add links to of navbar

## Auth Pt.5 - Show/Hide links
* Show/Hide usrname in the navbar, depending on whether a user is logged in

## Refactor the routes
* Use Express router to reorganize all the routes

## User + Comments
* Associate user and comments
* Save author's name to comments automatically

## User + Campgrounds
* Define middleware
* Prevent an unauthenticated user from creating a campground
* Save username and userid to newly created campground

## Editing campgrounds
* Add Method-Override
* Setup EDIT route to show the edit form
* Add a edit ejs template
* Setup UPDATE route route

## Deleting campgrounds
* Setup DESTROY route
* Add delete button

## Authorization Pt.1 - Campgrounds
* Define middleware
* User can only edit and delete his/her campground
* Hide/Show delete buttons depending on the current logged in user

## Editing comments
* Setup EDIT route for a comment
* Add edit ejs template
* Add edit button
* Setup UPDATE route for a comment

## Deleting comments
* Setup Destroy route
* Add delete button

## Authorization Pt.2 - Comments
* User can only edit and delete his/her comments
* Hide/Show edit and delete buttons depending on the current logged in user
* Refactor middleware using Express router

## Flash messages
* Install and configure flash-connect
* Add bootstrap alerts to the header
