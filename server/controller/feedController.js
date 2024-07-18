const FeedItem = require('../models/feedItem');

let feedItems = [];

let feedItem1 = FeedItem.createFeedItem('Marist Academics', 'bye1', 'linkUrl', 'imageUrl');
let feedItem2 = FeedItem.createFeedItem('Marist Athletics', 'Bye2', 'linkUrl', 'imageUrl');
let feedItem3 = FeedItem.createFeedItem('Marist Student Life', 'Bye3', 'linkUrl', 'imageUrl');

feedItems.push(feedItem1);
feedItems.push(feedItem2);
feedItems.push(feedItem3);

let latestId = 0;

const getNextId = () => {
    latestId += 1;
    return latestId;
};

exports.getAllFeedItems = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
};

exports.saveFeedItem = function (req, res) {
    const newFeedItem = new FeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl, getNextId());
    feedItems.push(newFeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(newFeedItem);
};

/* exports.getFeedItems = function (req, res) {
    res.setHeader('Content-Type', 'applicaton/json');
    res.send(feedItems);
} */

exports.getFeedItemById = function (req, res) {
    /* const feedItem = feedItems.find(item => item.id == req.params.id);
    if (feedItem) {
        res.setHeader('Content-Type', 'application/json');
        res.send(feedItems);
    } else {
        res.status(404).send('Feed Item not found.');
    } */
        res.setHeader('Content-Type', 'application/json');
        res.send(feedItems[req.params.id]);
};

exports.deleteFeedItemById = function (req, res) {
    feedItems = feedItems.filter(item => item.id != req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
};

exports.updateFeedItemById = function (req, res) {
    const feedItem = feedItems.find(item => item.id == req.params.id);
    if (feedItem) {
        Object.assign(feedItem, req.body);
        res.setHeader('Content-Type', 'application/json');
        res.send(feedItem);
    } else {
        res.status(404).send('Feed Item not found.');
    }
};


//let items = require("../models/feedItem.js");
//exports.getAllItems = (req, res) => {
    //2 parameters
    //res.setHeader('Content-Type', 'application/json');
    //res.send(feedItem.itemsArray);
//}