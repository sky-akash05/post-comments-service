// Import the Post model to interact with the posts collection in MongoDB
const Post = require('../models/Post');

// Controller to create a new post
exports.createPost = async (req, res) => {
  // Extract title and content from request body
  const { title, content } = req.body;

  // Create a new Post instance
  const post = new Post({ title, content });

  // Save the post to the database
  await post.save();

  // Send back the created post with HTTP 201 Created status
  res.status(201).json(post);
};

// Controller to get all posts
exports.getPosts = async (req, res) => {
  // Fetch all posts from the database
  const posts = await Post.find();

  // Send the list of posts as JSON response
  res.json(posts);
};

// Controller to add a comment to a specific post
exports.addComment = async (req, res) => {
  // Find the post by its ID from the URL parameter
  const post = await Post.findById(req.params.id);

  // Add a new comment to the post's comments array
  post.comments.push({ text: req.body.text });

  // Save the updated post
  await post.save();

  // Send the updated post with HTTP 201 Created status
  res.status(201).json(post);
};
