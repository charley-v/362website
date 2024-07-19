import React from 'react'
import './CSS/Loginsignup.css'
import { useState } from 'react'

export const Loginsignup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const submitForm = ()=>
  {
    console.log("Form Submited");
  }
  return (
    <body>
    <div className='loginsignup'>
      <div class="login-box">
    <h2>Signup</h2>
    <div class="textbox">
        <input type="text" placeholder="Username" value={username} name='username' onChange={(e)=>{setUsername(e.target.value)}} required/>
    </div>
    <div class="textbox">
        <input type="text" placeholder="Email" value={email} name='email'onChange={(e)=>{setEmail(e.target.value)}} required/>
    </div>
    <div class="textbox">
        <input type="password" placeholder="Password" value={password} name='password'onChange={(e)=>{setPassword(e.target.value)}}required/>
    </div>
    <div class="textbox">
        <input type="password" placeholder="Confirm Password" value={confirmpassword} name='confirmpassword' onChange={(e)=>{setConfirmPassword(e.target.value)}}required/>
    </div>
    <div class="remember-me">
        <input type="checkbox" id="remember" name="remember"/>
        <label for="remember">Remember Me</label>
    </div>
    <button class="btn" onClick={submitForm}>Sign Up</button>
        </div>

    </div>
    </body>
  )
}
export default Loginsignup
