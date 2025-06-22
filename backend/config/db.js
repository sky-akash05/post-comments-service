// Import the mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Define an asynchronous function to connect to MongoDB
const connectDB = async () => {
  // Connect to the MongoDB database using the provided URI and options
  await mongoose.connect('mongodb://127.0.0.1:27017/post_comments_db', {
    useNewUrlParser: true,        // Use the new URL parser (to avoid deprecation warning)
    useUnifiedTopology: true,     // Use the new unified topology engine for server discovery
  });

  // Log a success message after connection is established
  console.log('MongoDB connected');
};

// Export the connectDB function so it can be used in other parts of the application
module.exports = connectDB;
