import React, { useState } from 'react'
import Header from './components/Header';
import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Internetstatus from './components/Internetstatus';
import useInternetStatus from './utils/useInternetStatus'
import { userContext } from './context/usercontext';
import { Provider } from 'react-redux'
import  {store }from './redux/store.js'
const Layout = () => {
  const isOnline=useInternetStatus();
  console.log(isOnline)
  const [userName,setUserName]=useState('')
  return (
    <div>
    <userContext.Provider value={{loggedInUser:userName,setUserName}}>
    
      <Header/>
     {isOnline?<Outlet/>:<Internetstatus/>}
      <Footer/>
     
      </userContext.Provider>
    </div>
  )
}

export default Layout;

