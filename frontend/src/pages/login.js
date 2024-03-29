import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./CSS/login.css"

function Login() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <section>
        <div className="auth">
          <h1>Login</h1>
          <form action="">
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              placeholder="Username"
              required={true}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required={true}
            />
          <NavLink to="/ForgotPassword" className="forgot" onClick={handleClick}>
              Forgot Password?
          </NavLink>
            <button type="submit">Login</button>
          </form>
          <NavLink to="/Signup" className="login-message" onClick={handleClick}>
            SignUp
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default Login;