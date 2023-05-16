import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../login.css";

function Login() {
  const [data, setData] = useState({ 
    email: "", password: "" ,
});
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:6001/api/v1/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="left">
          <form className="form-container" onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="input"
            />
            {error && <div className="error_msg">{error}</div>}
            <button type="submit" className="green-btn">
              Login
            </button>
          </form>
        </div>
        <div className="right">
       
          <Link to="/signup">
            <button type="button" className="white-btn">
             Signup 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
