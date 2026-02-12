import React from "react";
import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import "./login.css";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:5033/login', {email, password},{
    withCredentials: true
      })
      .then(res => {
          console.log("login: " + res.data);
          if(res.data.Status === "Success") {
              if(res.data.role === "admin") {
                  navigate('/dashboard')
              } else {
                  navigate('/')
              }
          }
      }).catch(err => console.log(err))
  }

  return (
    <div className="wrapper">
      <div className="for-box login">
        <form  onSubmit={handleSubmit} action="">
          <h1>Login</h1>
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
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forget">
            <label>
              {" "}
              <input type="checkbox"></input>Remember Me
            </label>
            <a href="#">Forget Password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't Have An Account?
            <a href="/register">
              Register
            </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
