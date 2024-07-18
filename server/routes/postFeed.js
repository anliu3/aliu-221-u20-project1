const express = require( 'express' );
const router = express.Router( );
let feedController = require("../controller/feedController");

router.route('/api/feed')
    .get(feedController.getAllFeedItems)
    .post(feedController.saveFeedItem);

router.route('/api/feed/:id')
    .get(feedController.getFeedItemById)
    .delete(feedController.deleteFeedItemById)
    .patch(feedController.updateFeedItemById);

// router.route("/api/items")
//     .get(feedController.getAllItems);

/* const feedRoute = require('./routes/postFeed');
app.use('/api/users', feedRoute);
 */

module.exports = router;

