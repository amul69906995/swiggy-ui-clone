import React from 'react'
import { useRouteError } from 'react-router'

const ErrorApp = () => {
   const routerError= useRouteError()
   console.log(routerError)
  return (
    <div>
      if u are getting error check the api or configure cors by downloading cors  extension in your browser and running it on server side port</div>
    
  )
}

export default ErrorApp
