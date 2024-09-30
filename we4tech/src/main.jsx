// Import necessary modules from React and ReactDOM
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root and render the App component within StrictMode
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
