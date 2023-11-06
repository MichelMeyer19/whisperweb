import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    navigate('/signup'); // replace with your sign-up route
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
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
        <button
          type="submit"
          className="w-full bg-teal-500 text-white px-3 py-2 rounded-md mb-4 hover:bg-teal-600"
        >
          LOG IN
        </button>
        <button
          type="button"
          onClick={navigateToSignUp}
          className="w-full text-teal-500 px-3 py-2 text-center"
        >
          DON'T HAVE AN ACCOUNT?
        </button>
      </form>
    </div>
  );
};

