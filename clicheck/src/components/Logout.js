import React from 'react'
import { Button } from 'react-bootstrap'
import { useAuth0 } from "@auth0/auth0-react"
const Logout = () => {
    const { logout, isAuthenticated} = useAuth0();
  return (
    isAuthenticated && (
        <>
        <Button className=" button" variant="primary" onClick={logout}>Logout</Button>{' '}
        </>
    )
   
  )
}

export default Logout