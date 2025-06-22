// Import React library
import React from 'react';

// Import ReactDOM for rendering the app in the browser
import ReactDOM from 'react-dom/client';

// Import the main App component
import App from './App';

// Create a root container linked to the HTML element with id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root container
root.render(<App />);
