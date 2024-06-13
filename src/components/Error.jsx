import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
  const routerError= useRouteError()
console.log(routerError)
  return (
    <div>
    <h1>Route NOT FOUND</h1>
    </div>
  )
}

export default Error
