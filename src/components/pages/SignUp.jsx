import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthFormOrganism from "../organisms/AuthFormOrganism";

export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState(""); // New state for Repeat Password

  const handleSignUp = (e) => {
    e.preventDefault();
    // Implement your sign-up logic here
    console.log("Sign up with", email, password, repeatPassword);
    // Post sign-up logic here
  };

  const navigateToSignIn = () => {
    navigate("/sign-in"); // Navigate to the sign-in page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dorian">
      <h1 className="text-3xl font-bold mb-10">Create New Account</h1>
      <AuthFormOrganism
        onSubmit={handleSignUp}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        repeatPassword={repeatPassword}
        setRepeatPassword={setRepeatPassword}
        buttonText="Sign Up"
        navigateToOtherForm="Already have an account?"
        navigateToOtherFormAction={navigateToSignIn}
        isSignUpPage={true}
      />
    </div>
  );
};

export default SignUp;
