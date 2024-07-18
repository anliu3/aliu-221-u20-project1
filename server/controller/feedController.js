let feedItem = require('../models/feedItem');

let feedItems = [];

let feedItem1 = feedItem.createFeedItem('Marist Academics', 'Marist is ranked #10 out of 178 Regional Universities North. Known programs are computer sciences and pscyhology.', 'https://www.marist.edu/academics', 'https://www.marist.edu/documents/86200/499558/MSIS+Certificate+Spotlight+570x390.jpg/98565380-86c2-ecc3-e1ac-8802ef1baa2d?t=1678225976359');
let feedItem2 = feedItem.createFeedItem('Marist Athletics', 'Sponsored womens teams are softball, volleyball, and water polo. Sponsored mens teams include baseball and football.', 'https://goredfoxes.com/', 'https://goredfoxes.com/images/2023/3/21/Team.jpg?width=1884&quality=80&format=jpg');
let feedItem3 = feedItem.createFeedItem('Marist Student Life', 'Life at Marist outside the classroom offers a wealth of opportunity for personal growth and development.', 'https://www.marist.edu/student-life', 'https://www.marist.edu/documents/86200/319417/2018_04_24_StudentLife_DSC1330.jpg/4352e3f5-fec6-87b5-3771-531f3fc5d57d?t=1678286926844');

feedItems.push(feedItem1);
feedItems.push(feedItem2);
feedItems.push(feedItem3);

let latestId = 0;

const getNextId = () => {
    latestId += 1;
    return latestId;
};

// get function (getAllFeedItems)
exports.getAllFeedItems = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
};

// post function (saveFeedItem))
exports.saveFeedItem = function (req, res) {
    let newFeedItem = feedItem.createFeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl, getNextId());
    feedItems.push(newFeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
};

// get by an ID function (getFeedItemById)
exports.getFeedItemById = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems[req.params.id]);
};

// delete function (deleteFeedItemById)
exports.deleteFeedItemById = function (req, res) {
    feedItems = feedItems.filter(item => item.id != req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
};

// put function (putFeedItemById)
exports.putFeedItemById = function (req, res) { 
    feedItems[req.params.id] = feedItem.createFeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl, getNextId());
    if (feedItems) {
        Object.assign(feedItems, req.body);
        res.setHeader('Content-Type', 'application/json');
        res.send(feedItems);
    } else {
        res.status(404).send('Feed Item not found.');
        }
    };

// patch function (updateFeedItemById)
exports.updateFeedItemById = function (req, res) {
    var updatedFeed = feedItems[req.params.id];

    console.log(req.body.title);
    if (req.body.title)

        updatedFeed.title = req.body.title;
    if (req.body.body)
        updatedFeed.body = req.body.body;
    if (req.body.linkUrl)
        updatedFeed.linkUrl = req.body.linkUrl;
    if (req.body.imageUrl)
        updatedFeed.imageUrl = req.body.imageUrl;

    // save the local copy of the user back into the array
    feedItems[req.params.id] = updatedFeed;

    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems[req.params.id]);
}