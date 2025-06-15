import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./Signup.css"

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://blogsiteapp-kjw2.onrender.com/api/register/', formData);
      alert('Signup successful. You can now login.');
      navigate('/login');
    } catch (err) {
      alert('Signup failed. Please try again.');
      console.error("Signup Error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSignup} className="auth-form">
        <h2>Signup</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Signup</button>
        <p>Already have an account? <Link to="/signup" style={{ textDecoration:'none' }}>Please LogIn</Link></p>
      </form>
    </div>
  );
}

export default Signup;