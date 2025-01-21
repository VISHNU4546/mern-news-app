const express = require('express');
const jwt = require('jsonwebtoken');
const News = require('../models/News');
require('dotenv').config();
const{authenticateToken} = require("../middleware/news");


const router = express.Router();



// Get All News
router.get('/', authenticateToken, async (req, res) => {
    try {
        const news = await News.find();
        res.status(200).json(news);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

// Add a New News Item
router.post('/', authenticateToken, async (req, res) => {
    const { title, description, image } = req.body;
    try {
        const news = new News({ title, description, image });
        await news.save();
        res.status(201).json(news);
    } catch (err) {
        res.status(400).json({ error: 'Failed to add news' });
    }
});

// Update Likes or Dislikes
router.post('/:id/reaction', authenticateToken, async (req, res) => {
    const { reaction } = req.body; // 'like' or 'dislike'
    try {
        const news = await News.findById(req.params.id);
        if (!news) return res.status(404).json({ error: 'News not found' });

        if (reaction === 'like') news.likes += 1;
        else if (reaction === 'dislike') news.dislikes += 1;

        await news.save();
        res.status(200).json(news);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update reaction' });
    }
});

module.exports = router;
