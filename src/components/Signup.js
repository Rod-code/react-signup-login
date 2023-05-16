import React from "react";
import { Link, useNavigate} from "react-router-dom";
import "../signup.css";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    isAdmin: true,
    password: "",
  });
  const [err, setError] = useState("")
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
const url ='http://localhost:6001/api/v1/signup';
const {data: res} = await axios.post(url, data);

navigate('/login');
console.log(res.message)
    } catch(err){
        if (
            err.response &&
            err.response.status >= 400 &&
            err.response.status <= 500
        ) {
            setError(err.response.data.message);
        }
    }
  }
  return (
    <div className="singup-container">
      <div className="signup-form-container"></div>
       
        <div className="right">
          <form className="form-container" onSubmit={handleSubmit}>
            <h1>create a new account</h1>
            <input
              type="text"
              placeholder="fullname"
              name="fullname"
              value={data.fullname}
              required
              className="input"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="email"
              name="email"
              value={data.email}
              required
              className="input"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={data.password}
              required
              className="input"
              onChange={handleChange}
            />
          { err && <div className="error-msg">{err}</div>}
            <button type="submit" className="green-btn">Signup</button>

          </form>
          <div className="left">
      <Link to="/login">

        <button type="button" className="white-btn">
          Login
        </button>
        </Link>
        </div>
        </div>
     
    </div>
  );
}

export default Signup;
