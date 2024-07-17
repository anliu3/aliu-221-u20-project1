const express = require( 'express' );
const router = express.Router( );

let feedController = require("../controllers/feedController");

router.route("/api/items");
//get(feedController.getAllItems);

module.exports = router;