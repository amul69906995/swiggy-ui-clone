import React, { useContext, useState } from 'react'
import logo from '../assets/logo1.png';
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpCircle } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import '../css/Header.css'
import { Link ,useLocation} from 'react-router-dom';
import useCurrentLocation from '../utils/useCurrentLocation';
import { userContext } from '../context/usercontext';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useSelector } from 'react-redux';

const Header = () => {
    const [position,adress]=useCurrentLocation();
    const {loggedInUser}=useContext(userContext);
    const currentPath = useLocation().pathname;

    // console.log(currentPath)
    
    const[showRightNavbar,setShowRightNavbar]=useState(false);
  const handleClick=()=>{
         setShowRightNavbar(!showRightNavbar)
  };

  console.log(showRightNavbar)

  //subscring to store
  const cartItems=useSelector(store=>store.cart.items)
  
    return (
        <>

            <div className="header">
            <div className="hamburger">

          <span onClick={handleClick}>{showRightNavbar?<IoClose size="30px"/>:<GiHamburgerMenu  size="30px"/> }</span>
            </div>
                <div className="left">
                   <Link to="/"><img onClick={()=>setShowRightNavbar(false)} src={logo} alt="" className="logo" /></Link> 
                   {position.latitude&&position.longitude&& <span>{`${position?.latitude},${position?.longitude}`}</span>}  
                </div>
                <div className={showRightNavbar?"right":'hide_right'}>
                 
                        <li onClick={()=>setShowRightNavbar(false)}  className={`navItem ${currentPath==='/search'? "activeLink":""} `}>
                            <FaSearch />
                            <Link style={{ textDecoration: 'none' }} to='/search'>Search</Link>
                        </li>

                        <li  onClick={()=>setShowRightNavbar(false)} className={`navItem ${currentPath==='/offers'? "activeLink":""} `}>
                        <BiSolidOffer />
                           <Link style={{ textDecoration: 'none' }} to='/offers'>Offers</Link>
                        </li>
                        <li  onClick={()=>setShowRightNavbar(false)} className={`navItem ${currentPath==='/help'? "activeLink":""} `}>
                            <IoMdHelpCircle/>
                            <Link style={{ textDecoration: 'none' }} to="/help">Help</Link>
                        </li>

                        <li  onClick={()=>setShowRightNavbar(false)} className={`navItem ${currentPath==='/cart'? "activeLink":""} `}>
                        <FaShoppingCart />
                           <Link style={{ textDecoration: 'none' }} to='/cart'>Cart <span style={{border:'2px solid black'}}>{cartItems.length}</span></Link>
                        </li>
                        <li onClick={()=>setShowRightNavbar(false)}  className={`navItem ${currentPath==='/signin'? "activeLink":""} `}>
                            <FaSignInAlt/>
                            <Link style={{ textDecoration: 'none' }} to='/signin'>Sign in</Link>
                        </li>
                        <p>{loggedInUser}</p>
                   
                </div>
            </div>
        </>
    )
}

export default Header;

