import React from 'react'
import './CSS/Loginsignup.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export const Loginsignup = (props) => {
  const [email, setEmail]= useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword]= useState('')
  

  const logInUser = async ()=>
  {
    if(email.length === 0){
      alert("Invalid Email")
    }
    else if(password.length === 0){
      alert("Invalid Password")
    }
    else {
      axios.post("http://127.0.0.1:5000/login", {
        email: email,
        username: username,
        password: password,
      })
      .then(function(response){
        console.log(response)
        window.location.href = "/";
      })
      .catch(function(error){
        console.log(error, "error")
        if(error.response.status === 401){
          alert("Invalid Email or Password")
        }
    })
    }
}

  return (
    <div className='login'>
      <div className="login-box">
    <h2>Login</h2>
    <div className="textbox">
        <input type="text" placeholder='Email'value={email} name='email' onChange={(e) =>setEmail(e.target.value)}/>
    </div>
    <div className="textbox">
        <input type="password" placeholder='Password' value={password} name='password' onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <div className="remember-me">
        <input type="checkbox" id="remember" name="remember"/>
        <label>Remember Me</label>
    </div>
    <button type="button" className="btn" onClick={logInUser}>Login</button>
        </div>
      <div className="login-link">
            <Link to='/signup'>New Customer?</Link>
        </div>

    </div>
  )
}
export default Loginsignup
