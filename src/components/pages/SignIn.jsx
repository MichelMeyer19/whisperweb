import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthFormOrganism from "../organisms/AuthFormOrganism";

export const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Sign in with", email, password);
    // Insert authentication logic here
  };

  const navigateToSignUp = () => {
    navigate("./sign-up");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dorian">
      <h1 className="text-3xl font-bold mb-10">Sign In</h1>
      <AuthFormOrganism
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
