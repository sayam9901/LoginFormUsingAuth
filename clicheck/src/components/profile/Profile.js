import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import "./profile.css"

const Profile = () => {

    const { user , isAuthenticated } = useAuth0();
    console.log(user)
  return (
    isAuthenticated &&(
        <div className='profile-container'>
            <img  className='profile-img' src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>

        </div>
  )
  )
}

export default Profile