import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/register.css';
import api from '../utils/utils';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    // Validate inputs before making the API call
    if (!username || !email || !password) {
      setError('All fields are required');
      setLoading(false);
      return;
    }
  
    try {
      const response = await api.post('/register/', { username, email, password });
      if (response.data) {
        console.log(response.data);
        alert('Registration successful');
        
        setUsername('');
        setEmail('');
        setPassword('');
        
        navigate('/login');
      } else {
        alert('Registration failed');
      }
    } catch (err) {
      console.log(err);
      const errorMessage = typeof err.response?.data?.message === 'string' 
        ? err.response.data.message 
        : JSON.stringify(err.response?.data || { message: 'An error occurred' });
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      
      {error && <div className="mb-4 text-red-500">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      
      <div className="mt-4">
        <p className="text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
