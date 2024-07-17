const express = require( 'express' );
const router = express.Router( );
let feedController = require("../controllers/feedController");

app.route('/api/feed')
    .get(feedController.getAllFeedItems)
    .post(feedController.saveFeedItem);

app.route('/api/feed/:feedItemID')
    .get(feedController.getFeedItemById)
    .delete(feedController.deleteFeedItemById)
    .patch(feedController.updateFeedItemById);
router.route("/api/items")
    .get(feedController.getAllItems);

const feedRoute = require('./routes/postFeed');
app.use('/api/users', feedRoute);

module.exports = router;

