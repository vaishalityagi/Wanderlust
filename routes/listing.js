const express = require("express");
const router =  express.Router();
const wrapAsync =  require("../utils/wrapAsync.js");
const ExpressError =  require("../utils/ExpreesError.js");
const Listing = require ("../models/listing.js");
const { listingSchema } = require("../schema.js");
const {isLoggedIn, isOwner,validateListing} =  require("../middleware.js");
const listingController =  require("../controllers/listing.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");

const upload = multer({ storage });


// router.post("/additem", async (req, res) => {
//     if (!req.session.cart) req.session.cart = [];
    
//     const { listingId } = req.body;
//     const listing = await Listing.findById(listingId);

//     if (listing) {
//         req.session.cart.push(listing);
//         res.json({ success: true, cart: req.session.cart });
//     } else {
//         res.json({ success: false, message: "Listing not found" });
//     }
// });

// router.get("/", (req, res) => {
//     res.render("listings/cart", { cart: req.session.cart || [] });
// });

//Index ROUTE
router.get("/",wrapAsync(listingController.index));

//New Route
router.get("/new" , isLoggedIn, listingController.renderNewForm);
router.get("/search",wrapAsync(listingController.search));


//SHOW ROUTE
router.get("/:id", wrapAsync(listingController.showListing));




//Create route
router.post("/" , isLoggedIn,upload.single('listing[image]'), validateListing,wrapAsync(listingController.createListing));
// router.post('/',upload.single('listing[image]'),(req,res) =>{
//     res.send(req.file);
// });

//EDIT ROUTE
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync( listingController.renderEditForm));

//Update route
router.put("/:id", isLoggedIn ,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListing));

//DELETE ROUTE
router.delete("/:id",isLoggedIn,isOwner, wrapAsync(listingController.deleteListing));


module.exports = router;