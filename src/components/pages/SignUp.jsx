// SignUp.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenericButton from '../atoms/GenericButton'; // Make sure this is the correct path to your GenericButton component

export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Implement your sign-up logic here.
    console.log('Sign up with', email, password, repeatPassword);
    // Post sign-up logic here.
  };

  const navigateToSignIn = () => {
    navigate('/signin'); // Navigate to the sign-in page
  };

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
            additionalStyles="bg-teal-500 text-white hover:bg-teal-600"
            type="submit"
          />
        </div>
        <div className="flex justify-center">
          <GenericButton
            text="Already have an account?"
            additionalStyles="text-teal-500 hover:bg-gray-100"
            onClick={navigateToSignIn}
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
 