// Import Express framework
const express = require('express');

// Create a new router instance to define route handlers
const router = express.Router();

// Import controller functions for post operations
const { createPost, getPosts, addComment } = require('../controllers/postController');

// Route to create a new post
router.post('/posts', createPost);

// Route to fetch all posts
router.get('/posts', getPosts);

// Route to add a comment to a specific post by ID
router.post('/posts/:id/comments', addComment);

// Export the router to be used in the main app
module.exports = router;
