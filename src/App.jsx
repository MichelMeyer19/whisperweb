// Import necessary components and modules from React and React Router
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react"; // Import useEffect and useState hooks from React
import "./App.css"; // Importing styles for the App component
import Navbar from "./components/molecules/Navbar"; // Importing the Navbar component
import BackgroundMesh from "./components/atoms/BackgroundMesh";

import {
  Information,
  ChatsView,
  NewChat,
  Chat,
  NewChatRequested,
  Welcome,
  OurValues,
  SignIn,
  SignUp,
} from "./components/pages"; // Importing page components

// Main functional component for the App
function App() {
  const location = useLocation(); // Get the current location
  const [showNavbar, setShowNavbar] = useState(true);

  // Use useEffect to update the showNavbar state based on the route
  useEffect(() => {
    // Define an array of paths where the Navbar should not be shown
    const noNavbarPaths = [
      "/",
      "/welcome",
      "/welcome/our-values",
      "/sign-in",
      "/sign-in/sign-up",
    ];

    if (location.pathname.startsWith("/chat/")) {
      noNavbarPaths.push(location.pathname);
    }

    // Set showNavbar to false if the current path is in the noNavbarPaths array
    setShowNavbar(!noNavbarPaths.includes(location.pathname));
  }, [location]); // Dependency array with location to re-run effect when location changes


  // JSX structure for the App component
  return (
    <div className="App">
      <BackgroundMesh />
      {/* Conditional rendering of Navbar based on showNavbar state */}
      {showNavbar && <Navbar />}
      <Routes>
        {/* React Router's Routes component for handling page routing */}
        <Route path="/" element={<Welcome />} />
        <Route path="/chats-overview" element={<ChatsView />} />
        <Route path="/new-chat" element={<NewChat />} />
        <Route path="/newchatrequested/true" element={<NewChatRequested />} />
        <Route path="/newchatrequested/false" element={<NewChatRequested />} />
        <Route path="/information" element={<Information />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:chatId" element={<Chat />} />{" "}
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/welcome/our-values" element={<OurValues />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-in/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}


// Exporting the App component as the default export wrapped in Router to provide location context
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
