// SignIn.jsx
// allows users to log in to the app

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Parse from 'parse/dist/parse.min.js';

import GenericButton from '../atoms/GenericButton';

export const SignIn = () => {

  // setup navigation function
  const navigate = useNavigate();
  // set states user inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // function that handles the signin button
  // 1. try to sign in the user in the DB
  // >> if successfull: create session and navigate user to main-chat-page
  // >> if not successfull: throw an alert that explains the user what the error is
  const handleSignIn = (e) => {
    e.preventDefault();

    console.log('Trying to sign in with', email, password);

    doUserLogIn(email,password)
  };

  const doUserLogIn = async function (email,password) {
    try {
      // do the log-in in the DB
      const loggedInUser = await Parse.User.logIn(email, password);
      
      console.log(`Success! User ${loggedInUser.get('username')} has successfully signed in!`);

      // To verify that this is in fact the current user, `current` can be used
      const currentUser = await Parse.User.current();
      console.log(loggedInUser === currentUser);

      // Clear input fields
      setEmail('');
      setPassword('');

      // navigate user to main-chat-page
      navigate('/chatsview')
    } catch (error) {
      // Error can be caused by wrong parameters or lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  // function that handles the button to advance to the sign up process
  const navigateToSignUp = () => {
    // navigate to sign-up page
    navigate('./signup');
  };

  // Probably needs to be changed to components 
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dorian">
      <h1 className="text-3xl font-bold mb-10">Sign In</h1>
      <form onSubmit={handleSignIn} className="w-full max-w-xs">
        <label htmlFor="email" className="text-gray-700">
          Email
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="someone@example.com"
            className="w-full px-3 py-2 border rounded-md mb-4"
            required
          />
        </label>
        <label htmlFor="password" className="text-gray-700">
          Password
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password..."
            className="w-full px-3 py-2 border rounded-md mb-6"
            required
          />
        </label>
        <div className="flex justify-center"> {/* Wrapper to center the button */}
          <GenericButton
            text="Log In"
            additionalStyles="text-black bg-green hover:bg-green-dark text-sm"
            onClick={() => {}} // Since it's a submit button, onClick isn't needed here
            type="submit"
          />
        </div>
        <div className="flex justify-center mt-4"> {/* Another wrapper for the sign-up navigation */}
          <GenericButton
            text="Don't have an account?"
            additionalStyles="text-black hover:bg-gray-100 text-xs"
            onClick={navigateToSignUp}
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;