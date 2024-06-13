import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import MenuCard from './MenuCard';
import { useParams } from 'react-router';
import useResturantMenu from '../utils/useResturantMenu';
import useCurrentLocation from '../utils/useCurrentLocation'
const Menu = () => {
const adress=useCurrentLocation();
 const {resturantId}=useParams();
const[resturantMenu,resturantName]=useResturantMenu(resturantId)
const [showIndex, setshowIndex] = useState(0);

const handleShowIndex=(index)=>{
  
  console.log("i",index,"si",showIndex)
  if(index===showIndex){
        setshowIndex(-1);
  }
  else{
    setshowIndex(index)
  
  }
 
}
console.log(resturantMenu)
if(!resturantMenu){
    return (<Loading/>)
}
  return (
 <>
 <h1>Welcome to {resturantName}</h1>
    {resturantMenu.map((element,i)=><MenuCard key={i} 
    menuTitle={element?.card?.card?.title} 
    menuContent={element?.card?.card?.itemCards}
      showIndex={showIndex===i?true:false}
      handleShowIndex={()=>handleShowIndex(i)}
    />)}
 </>
  )
}

export default Menu;
