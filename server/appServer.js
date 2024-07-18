const express = require ('express');
const bodyParser = require('body-parser');
const feedController = require('./controller/feedController');

const app = express();

//Parse JSON bodies
//app.use(express.json());

app.use(bodyParser.json({ type: 'application/json' }));

// app.route('/api/feed')
//     .get(feedController.getAllFeedItems)
//     .post(feedController.saveFeedItem);

// app.route('/api/feed/:feedItemID')
//     .get(feedController.getFeedItemById)
//     .delete(feedController.deleteFeedItemById)
//     .patch(feedController.updateFeedItemById);

//app.listen(1337, () => console.log('Listening on port 1337.'));

//const express = require('express')
//const app = express();
app.use(express.static('client/public'));

// view /webpage endpoints
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

//API endpoints
const postFeed = require("./routes/postFeed");
app.use("/", postFeed); ///api/items
app.listen(1337, () => console.log('Listening on port 1337.'))
