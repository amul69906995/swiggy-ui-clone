import { useState,useEffect } from "react";


const useResturantMenu=(resturantId)=>{
    const [resturantMenu,setResturantMenu]=useState(null);
    const [resturantName,setResturantName]=useState(null);
   
 useEffect( ()=>{
   
    const fetchMenu=async()=>{
        let url=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3176452&lng=82.9739144&restaurantId=${resturantId}`;
        const response=await fetch(url);
        const data= await response.json();
        //console.log(data.data.cards[0].card.card.text)
        setResturantName(data.data.cards[0].card.card.text)
       const wholeMenu= data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
       const filteredMenuByItemcategory=wholeMenu.filter(item=>item?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
       setResturantMenu(filteredMenuByItemcategory)
        // setResturantMenu(data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }
    fetchMenu();
    },[])
    return [resturantMenu,resturantName];
}
export default useResturantMenu;