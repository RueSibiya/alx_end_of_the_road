/*import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Main App component
import "./index.css"; // Global CSS styles

// Import styles for the Slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Render the React application into the root DOM element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Ensures the app runs in strict mode to highlight potential issues */}
    <App />
  </React.StrictMode>
);

