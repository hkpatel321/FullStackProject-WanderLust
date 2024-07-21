const express=require("express");
const router= express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema}=require("../schema.js");
const Listing = require("../models/listing.js");
const {isLoggedin, isOwner,validateListing}=require("../middleware.js");
const listingController=require("../controllers/listings.js");
const multer  = require('multer');
const {storage}=require("../cloudConfing.js");
const upload = multer({storage }); // destination to uploads folder 

router.route("/")
.get( wrapAsync(listingController.index))
.post(isLoggedin,
  upload.single("listing[image]"),
  validateListing, 
  wrapAsync(listingController.createListing));

  // new route - we will keep this above /:id because the interpreter may treat new as id  
  router.get("/new",isLoggedin,listingController.renderNewForm);

  router.route("/:id")
  .get( wrapAsync(listingController.showListing))
  .put(isLoggedin ,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(listingController.updateListing))
  .delete(isLoggedin,isOwner,wrapAsync(listingController.destroyListing));
  
  
  //edit route
  router.get("/:id/edit",isLoggedin,isOwner,wrapAsync(listingController.renderEditForm));
  
  
  module.exports=router;