// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router for page routing
import './styles/styles.css'; // Global styles
import App from './App'; // Main App component

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap the App with BrowserRouter
root.render(
  <Router>
    <App />
  </Router>
);
