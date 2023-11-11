// SignUp.js 
// allows users to sign up (if successfull they will be redirected to main-chat-page)

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Parse from 'parse/dist/parse.min.js';

// import generic button
import GenericButton from '../atoms/GenericButton';

export const SignUp = () => {

  // setup navigation function
  const navigate = useNavigate();
  // set states user inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  // function that handles the signup button
  // 1. try to sign up the user in the DB
  // >> if successfull: store userdate and navigate user to main-chat-page
  // >> if not successfull: throw an alert that explains the user what the error is
  const handleSignUp = (e) => {
    e.preventDefault();

    // check if password and 2nd-password are identical (otherwise throw an error)
    if (password == repeatPassword) {
      console.log('Trying to sign up with', email, password);
      // call function that registers user in DB
      doUserRegistration(email,password)
    } else {
      alert('Passwords do not match, please try again.')
    }
  };

  // function that handles the signup process of the user in the DB
  const doUserRegistration = async function (email,password) {
    // set new user details
    var user = new Parse.User();
    user.set("username", email);
    user.set("email", email);
    user.set("password", password);
    try {
      // create a new user within the DB
      await user.signUp();
      console.log(`Success! User ${user.getUsername()} was successfully created!`);
      // navigate user to main-chat-page after successfull signup!
      navigate('/chatsview')
    } catch (error) {
      // signUp can fail if any parameter is blank or failed an uniqueness check on the server
      alert(`Error! ${error} ${error.code}`);
    }
  };

  // function that handles the button to return to the log in process
  const navigateToSignIn = () => {
    // Navigate to the sign-in page
    navigate('/signin');
  };

  // The following input buttons needs to be converted into component and a molecule parent component 
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dorian">
      <h1 className="text-3xl font-bold mb-10">Create New Account</h1>
      <form onSubmit={handleSignUp} className="w-full max-w-xs">
        <label htmlFor="email" className="text-gray-700 block mb-2">
          Email
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 border rounded-md mb-4"
            required
          />
        </label>
        <label htmlFor="password" className="text-gray-700 block mb-2">
          Password
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-2 border rounded-md mb-4"
            required
          />
        </label>
        <label htmlFor="repeatPassword" className="text-gray-700 block mb-2">
          Repeat Password
          <input
            type="password"
            id="repeatPassword"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            placeholder="Repeat your password"
            className="w-full p-2 border rounded-md mb-6"
            required
          />
        </label>
        <div className="flex justify-center mb-4">
          <GenericButton
            text="Sign Up"
            additionalStyles="text-black bg-green hover:bg-green-dark text-sm"
            type="submit"
          />
        </div>
        <div className="flex justify-center">
          <GenericButton
            text="Already have an account?"
            additionalStyles="text-black hover:bg-gray-100 text-xs"
            onClick={navigateToSignIn}
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
 