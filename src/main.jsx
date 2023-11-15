import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./App.jsx";
import "./index.css";
import Parse from "parse/dist/parse.min.js";

// Store Parse Initialization Keys
const PARSE_APPLICATION_ID = "I4ZAiP31nKwNRdrFJtAs766FVZUPtLXWZvTstqI9";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "Jhfr55Hzp7T5sTtkiH6zMvhpNnQ1Z2XkQCbacfWB";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
