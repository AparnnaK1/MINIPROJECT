import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client'; // Import createRoot from "react-dom/client"
import App from './App.jsx';
import './index.css';

// Use createRoot from "react-dom/client"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

/*import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)*/