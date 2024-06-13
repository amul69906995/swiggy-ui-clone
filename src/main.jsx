import React from 'react'

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Offers from './components/Offers.jsx'
import Cart from './components/Cart.jsx'
import Body from './components/Body.jsx'
import Layout from './Layout.jsx';
import Help from './components/Help.jsx';
import ErrorApp from './components/ErrorApp.jsx';
import Signin from './components/Signin.jsx'
import Menu from './components/Menu.jsx';
import Search from './components/Search.jsx';
import Filter from './components/Filter.jsx';
import { Provider } from 'react-redux'
import  {store }from './redux/store.js'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/offers",
        element: <Offers/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/help",
        element: <Help/>
      },
      {
        path: "/signin",
        element: <Signin/>
      },
      {
        path: "/resturantmenu/:resturantId",
        element: <Menu/>
      },
      {
        path: "/search",
        element: <Search/>
      },
      {
        path:'/filter',
        element:<Filter/>
        
      }
    ],
    errorElement:<ErrorApp/>
  },
 
]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider  store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
