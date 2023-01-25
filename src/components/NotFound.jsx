import React from 'react'
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
//useNavigate is used to redirect the webpage to another webpage using setTimeout function after 1 second

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 1000)
  }, [])
  return (
    // <Navigate to={"/"} />
    <h1>Not Found</h1>
  )
}

export default NotFound
