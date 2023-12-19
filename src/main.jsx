import React from 'react'
import ReactDOM from 'react-dom/client'
import AppWrapper from './App.jsx'
import './index.css'
import './assets/fonts.css';
import Parse from 'parse/dist/parse.min.js';

// Store Parse Initialization Keys
const PARSE_APPLICATION_ID = "gFjNyetbeOCiLa4yvpwcmSwRaakc1U7EMuC2NAV8";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "I569nE1Ya7SgU008uG4DK76aZiNhkdH2jnhTl0br";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
