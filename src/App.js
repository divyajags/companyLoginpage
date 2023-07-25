import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    // For demonstration purposes, we'll just log the email and password
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h1 className="company-name">MYTimesheets</h1>
      <p className="description">Please enter details to sign up</p>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label className="label">Email:</label>
          <input
            className="input-field"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="label">Password:</label>
          <input
            className="input-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" type="submit">Sign Up</button>
      </form>
      <p className="login-text">Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default LoginPage;
