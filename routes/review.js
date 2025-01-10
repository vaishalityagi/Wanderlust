const express = require("express");
const router =  express.Router({mergeParams:true});
const wrapAsync =  require("../utils/wrapAsync.js");
const ExpressError =  require("../utils/ExpreesError.js");
const Listing = require ("../models/listing.js");
const Review = require("../models/review.js");

const { reviewSchema } = require("../schema.js");
const {validateReview, isLoggedIn,isReviewAuthor} =  require("../middleware.js");

const reviewController =  require("../controllers/review.js");




//Review POST Route

router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.postReview));
  
  // Delete review route
  router.delete("/:reviewId",isLoggedIn, isReviewAuthor,wrapAsync(reviewController.deleteReview
  ));
  
  module.exports = router;
  