  // Import necessary components and modules from React and React Router
  import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
  import { useEffect, useState } from 'react'; // Import useEffect and useState hooks from React
  import "./App.css"; // Importing styles for the App component
  import Navbar from "./components/molecules/Navbar"; // Importing the Navbar component
  import { Information, ChatsView, NewChat, Chat, Welcome, OurValues, SignIn, SignUp } from "./components/pages"; // Importing page components

  // Main functional component for the App
  function App() {
    const location = useLocation(); // Get the current location
    const [showNavbar, setShowNavbar] = useState(true);

    // Use useEffect to update the showNavbar state based on the route
    useEffect(() => {
      // Define an array of paths where the Navbar should not be shown
      const noNavbarPaths = ['/welcome', '/welcome/ourvalues', '/signin', '/signin/signup'];
      // Set showNavbar to false if the current path is in the noNavbarPaths array
      setShowNavbar(!noNavbarPaths.includes(location.pathname));
    }, [location]); // Dependency array with location to re-run effect when location changes

    // JSX structure for the App component
    return (
      <div className="App">
        {/* Conditional rendering of Navbar based on showNavbar state */}
        {showNavbar && <Navbar />}
        <Routes>
          {/* React Router's Routes component for handling page routing */}
          <Route path="/" element={<ChatsView />} />
          <Route path="/chatsview" element={<ChatsView />} />
          <Route path="/newchat" element={<NewChat />} />
          <Route path="/information" element={<Information />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/welcome/ourvalues" element={<OurValues />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signin/signUp" element={<SignUp />} />
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
