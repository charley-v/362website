import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './CSS/profile.css'

const Profile = (props) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
      const email = encodeURIComponent(localStorage.getItem('email'));
      axios.get(`http://127.0.0.1:5000/profile/${email}`, {
          headers: { Authorization: `Bearer ${props.token}` }
      })
      .then((response) => {
          console.log(response);
          setProfileData({
              username: response.data.username,
              email: response.data.email,
          });
      })
      .catch((error) => {
          console.error(error);
      });
  }, [props.token]);

  return (
    <div className='profile'>
      <h2> Account</h2>
      {profileData && (
      <div className="details">
        <p>Username:{profileData.username}</p>
        <p>Email:{profileData.email}</p>
      </div>
      )}
    </div>
      
  )
}
export default Profile


/* const [profileData, setProfileData] = useState(null)
    
    const email = localStorage.getItem('email')
    useEffect(() => {
     if(email && token)
     {
      getUsers()
     }
    }, [email, token])

    
    
    function getUsers() { 
        axios({
          method: "GET",
          url:`http://127.0.0.1:5000/profile/$email}`, 
          headers: {
            Authorization: 'Bearer ${token}'
          }
        })
        .then((response) => {
            console.log(response)
          const res =response.data
          if(res.access_token){
            setToken(res.access_token)
          }
          setProfileData(({
            
            profile_email: res.email,
              }))
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })
    }
    if(!profileData){
      return <div> Loading...</div>
    } */