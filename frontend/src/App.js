// Import necessary hooks and UI components from React and Material UI
import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Divider
} from '@mui/material';

// Import custom axios instance for API calls
import API from './api';

// Import child component to render individual posts
import PostItem from './components/PostItem';

function App() {
  // State to store list of posts
  const [posts, setPosts] = useState([]);

  // State to hold new post title and content
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // State to hold comment text for each post (keyed by post ID)
  const [comment, setComment] = useState({});

  // Function to fetch all posts from backend
  const fetchPosts = async () => {
    const res = await API.get('/posts'); // GET request to fetch posts
    setPosts(res.data); // Update state with fetched posts
  };

  // Fetch posts once on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to create a new post
  const createPost = async () => {
    if (!title || !content) return; // Ignore if inputs are empty
    await API.post('/posts', { title, content }); // Send POST request
    setTitle(''); // Clear title input
    setContent(''); // Clear content input
    fetchPosts(); // Refresh post list
  };

  // Function to add a comment to a specific post
  const addComment = async postId => {
    if (!comment[postId]) return; // Ignore if comment is empty
    await API.post(`/posts/${postId}/comments`, { text: comment[postId] }); // POST comment
    setComment({ ...comment, [postId]: '' }); // Clear comment input for this post
    fetchPosts(); // Refresh post list
  };

  return (
    <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
      {/* Section to create a new post */}
      <Typography variant="h4" gutterBottom>
        Create Post
      </Typography>

      {/* Input fields for title and content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          fullWidth
        />
        <TextField
          label="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          fullWidth
          multiline
          rows={3}
        />
        <Button variant="contained" onClick={createPost}>
          Submit
        </Button>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Section to display all posts */}
      <Typography variant="h5" gutterBottom>
        All Posts
      </Typography>

      {/* Render each post using the PostItem component */}
      {posts.map(p => (
        <PostItem
          key={p._id}
          post={p}
          comment={comment}
          setComment={setComment}
          addComment={addComment}
        />
      ))}
    </Container>
  );
}

export default App;
