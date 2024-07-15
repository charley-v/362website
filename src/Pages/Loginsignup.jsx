import React from 'react'
import './CSS/Loginsignup.css'

export const Loginsignup = () => {
  return (
    <body>
    <div className='loginsignup'>
      <div class="login-box">
    <h2>Login</h2>
    <div class="textbox">
        <input type="text" placeholder="Username" required/>
    </div>
    <div class="textbox">
        <input type="password" placeholder="Password" required/>
    </div>
    <div class="remember-me">
        <input type="checkbox" id="remember" name="remember"/>
        <label for="remember">Remember Me</label>
    </div>
    <button class="btn">Login</button>
    <div class="signup-link">
        <a href="#">Sign Up</a>
    </div>
        </div>

    </div>
    </body>
  )
}
export default Loginsignup
