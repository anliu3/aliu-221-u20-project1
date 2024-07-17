const FeedItem = require('../models/feedItem');

let feedItems = [];
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

exports.getFeedItemById = function (req, res) {
    const feedItem = feedItems.find(item => item.id == req.params.id);
    if (feedItem) {
        res.setHeader('Content-Type', 'application/json');
        res.send(feedItem);
    } else {
        res.status(404).send('Feed Item not found.');
    }
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