// Import necessary components and modules from React and React Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // Importing styles for the App component
import Navbar from "./components/molecules/Navbar"; // Importing the Navbar component
import { Information, ChatsView, NewChat, Chat } from "./components/pages"; // Importing page components

// Main functional component for the App
function App() {
  // JSX structure for the App component
  return (
    <Router>
      {/* Ensure that your routes are wrapped in a Router component */}
      <div className="App">
        {/* Main container with class name "App" */}
        <Navbar /> {/* Rendering the Navbar component */}
        <Routes>
          {/* React Router's Routes component for handling page routing */}
          <Route path="/" element={<ChatsView />} />
          <Route path="/chatsview" element={<ChatsView />} />
          <Route path="/newchat" element={<NewChat />} />
          <Route path="/information" element={<Information />} />
          <Route path="/chat/:chatId" component={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

// Exporting the App component as the default export
export default App;
