import React, {  useState } from "react";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import "./sign.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5033/register", { name, email, password })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="wrapper">
      <div className="for-box login">
        <form onSubmit={handleSubmit} action="">
          <h1>Register</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="UserName"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <FaUserAlt className="icon" />
          </div>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaEnvelope className="icon" />
          </div>

          <div className="input-box">
            <input
              type="Password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forget">
            <label>
              {" "}
              <input type="checkbox"></input> I Agree To The Terms & Conditions
            </label>
          </div>
          <button type="submit">Register</button>
          <div className="register-link">
            <p>
              Already Have An Account?
              <a href="/login">
              Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
