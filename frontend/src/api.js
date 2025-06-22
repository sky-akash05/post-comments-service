// Import axios to make HTTP requests
import axios from 'axios';

// Create an axios instance with a predefined base URL
const API = axios.create({ baseURL: 'http://localhost:5000' });

// Export the axios instance to use in other parts of the frontend
export default API;
