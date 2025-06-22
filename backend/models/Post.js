// Import mongoose to define schemas and interact with MongoDB
const mongoose = require('mongoose');

// Define schema for a comment with text and timestamp
const commentSchema = new mongoose.Schema({
  text: String, // Comment content
  createdAt: { type: Date, default: Date.now } // Automatically set the creation time
});

// Define schema for a post with title, content, and an array of comments
const postSchema = new mongoose.Schema({
  title: String,              // Title of the post
  content: String,            // Content/body of the post
  comments: [commentSchema]   // Embedded comments using the commentSchema
});

// Export the Post model based on postSchema
module.exports = mongoose.model('Post', postSchema);
