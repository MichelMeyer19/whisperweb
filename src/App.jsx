// Import necessary components and modules from React and React Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // Importing styles for the App component
import Navbar from "./components/molecules/Navbar"; // Importing the Navbar component
import { Information, Chats, NewChat, NewChatRequested } from "./components/pages"; // Importing page components

// Main functional component for the App
function App() {
  // JSX structure for the App component
  return (
    <Router> {/* Ensure that your routes are wrapped in a Router component */}
      <div className="App"> {/* Main container with class name "App" */}
        <Navbar /> {/* Rendering the Navbar component */}
        <Routes> {/* React Router's Routes component for handling page routing */}
          {/* Route for the default path ("/") with Chats component as the element */}
          <Route path="/" element={<Chats />} />
          {/* Route for the "/chats" path with Chats component as the element */}
          <Route path="/chats" element={<Chats />} />
          {/* Route for the "/newchat" path with NewChat component as the element */}
          <Route path="/newchat" element={<NewChat />} />
          {/* Route for the "/newchatrequested" path with NewChatRequested component as the element */}
          <Route path="/newchatrequested" element={<NewChatRequested />} />
          {/* Route for the "/information" path with Information component as the element */}
          <Route path="/information" element={<Information />} />
        </Routes>
      </div>
    </Router>
  );
}

// Exporting the App component as the default export
export default App;
