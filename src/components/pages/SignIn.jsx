// SignIn.jsx page component

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Parse from 'parse/dist/parse.min.js';
import AuthForm from "../organisms/AuthForm";

export const SignIn = () => {
  const navigate = useNavigate();
  // set states user inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function that handles the signin button
  // 1. try to sign in the user in the DB
  // >> if successful: create session and navigate user to main-chat-page
  // >> if not successful: throw an alert that explains the user what the error is
  // Handler for sign-in form submission
  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Trying to sign in with', email, password);
    doUserLogIn(email,password)
  };

  const doUserLogIn = async function (email, password) {
    try {
      // do the log-in in the DB
      const loggedInUser = await Parse.User.logIn(email, password);

      console.log(
        `Success! User ${loggedInUser.get(
          "username"
        )} has successfully signed in!`
      );

      // To verify that this is in fact the current user, `current` can be used
      const currentUser = await Parse.User.current();
      console.log(loggedInUser === currentUser);

      // Clear input fields
      setEmail("");
      setPassword("");

      // navigate user to main-chat-page
      navigate('/chats-overview')
    } catch (error) {
      // Error can be caused by wrong parameters or lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  // Handler for navigating to the sign-up page
  const navigateToSignUp = () => {
    navigate("./sign-up");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dorian">
      {" "}
      <h1 className="text-3xl font-bold mb-10">Sign In</h1>
      <AuthForm
        onSubmit={handleSignIn}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        buttonText="Log In"
        navigateToOtherForm="Don't have an account?"
        navigateToOtherFormAction={navigateToSignUp}
      />
    </div>
  );
};

export default SignIn;
