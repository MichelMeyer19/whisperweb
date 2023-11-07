import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenericButton from '../atoms/GenericButton'; // Adjust the import path as necessary

export const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Insert authentication logic here
    console.log('Sign in with', email, password);
  };

  const navigateToSignUp = () => {
    navigate('./signup'); // replace with your sign-up route
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
            additionalStyles="text-black bg-green hover:bg-green-dark"
            onClick={() => {}} // Since it's a submit button, onClick isn't needed here
            type="submit"
          />
        </div>
        <div className="flex justify-center mt-4"> {/* Another wrapper for the sign-up navigation */}
          <GenericButton
            text="Don't have an account?"
            additionalStyles="text-black hover:bg-gray-100"
            onClick={navigateToSignUp}
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
