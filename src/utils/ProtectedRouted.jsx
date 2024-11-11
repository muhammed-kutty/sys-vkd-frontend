import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route ,  } from 'react-router-dom'

const ProtectedRouted = ({element , ...rest}) => {
  const {isAuthenticated , status} = useSelector((state) => state.auth)

  return (
    isAuthenticated ? element
    :
    (<Navigate to="/login" replace  state={{ message: "Please Login Here to Access this Page" }} />)
  )
}

export default ProtectedRouted