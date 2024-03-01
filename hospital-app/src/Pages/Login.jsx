import React from 'react'
import "./login.css";
import { FaUser, FaLock } from "react-icons/fa";


const Login = () => {
  return (
    <>
      <div className='Hero-login'>
        <div className='container'>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUser className='icon'/>
          </div>

          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock className="icon"/>
          </div>

          <div className="remember-forget">
            <label> <input type="checkbox" />Remember me</label>
            <a href="#">Forget password</a>
          </div>

          <button>Login</button>

          <div className="Registet-link">
            <p>Don't have an account? <a href="#">Register here</a> </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login