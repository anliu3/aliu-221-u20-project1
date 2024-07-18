const express = require( 'express' );
const router = express.Router( );
let feedController = require("../controller/feedController");

router.route('/api/feed')
    .get(feedController.getAllFeedItems)
    .post(feedController.saveFeedItem);

router.route('/api/feed/:id')
    .get(feedController.getFeedItemById)
    .delete(feedController.deleteFeedItemById)
    .put(feedController.putFeedItemById)
    .patch(feedController.updateFeedItemById);

module.exports = router;

