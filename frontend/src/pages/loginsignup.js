import React, { useState } from "react";
import user_icon from '../Components/Assets/login_assets/person.png'
import email_icon from '../Components/Assets/login_assets/email.png'
import password_icon from '../Components/Assets/login_assets/password.png'
import "./CSS/loginsignup.css"

function LoginSignup() {
  const [action, setAction] = useState("Login");

  return (
    <div className="body">
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>

            </div>
            <div className='inputs'>
                    {action!="Sign Up"?<div></div>: 
                        <div className='input' >
                            <img src={user_icon} alt='user icon' />
                            <input type='text' placeholder='Username' />
                        </div>
                    }
            
                <div className='input'>
                    <img src={email_icon} alt='user icon' />
                    <input type='email' placeholder='Email' />
                </div>

                <div className='input'>
                    <img src={password_icon} alt='user icon' />
                    <input type='password' placeholder='Password' />
                </div> 
            </div>
            <div className="submit-container">
                <div className={action==="Login"? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    </div>
  );
}

export default LoginSignup;