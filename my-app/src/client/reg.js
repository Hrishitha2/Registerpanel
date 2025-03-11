import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./reg.css"; 
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/register", { 
        username, 
        email, 
        password 
      });

      // ✅ Check if response contains data
      if (res && res.data) {
        alert(res.data.message || "User registered successfully!");
      } else {
        alert("Unexpected response from server.");
      }

      // ✅ Clear input fields after successful registration
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Error:", err);
      alert(err.response?.data?.error || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p> 
    </div>
  );
};

export default Register;
