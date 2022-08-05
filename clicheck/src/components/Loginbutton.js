import React from 'react'
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react'

const Loginbutton = () => {
    const { loginWithRedirect , isAuthenticated }=useAuth0();
  return (
    !isAuthenticated &&(
        <>
        <h1>please click here for the login check</h1>
    <Button className="button" variant="primary" onClick={loginWithRedirect}>login</Button>{' '}
    </>
    )
  
  )
}

export default Loginbutton