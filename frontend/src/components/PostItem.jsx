import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Divider,
  Box
} from '@mui/material';

const PostItem = ({ post, comment, setComment, addComment }) => (
  <Card sx={{ marginBottom: 3, padding: 2 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        {post.content}
      </Typography>

      <Divider sx={{ marginBottom: 1 }}>Comments</Divider>
      {post.comments.map((c, idx) => (
        <Typography key={idx} variant="body2" sx={{ marginBottom: 0.5 }}>
          • {c.text}
        </Typography>
      ))}

      <Box sx={{ display: 'flex', gap: 1, marginTop: 2 }}>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          placeholder="Add comment"
          value={comment[post._id] || ''}
          onChange={e => setComment({ ...comment, [post._id]: e.target.value })}
        />
        <Button variant="contained" onClick={() => addComment(post._id)}>
          Add
        </Button>
      </Box>
    </CardContent>
  </Card>
);

export default PostItem;
