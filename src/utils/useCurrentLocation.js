import { useEffect, useState } from "react";
import getAdress from "./getAdress";
const useCurrentLocation=()=>{
const [adress,setAdress]=useState('fetching Location')
const [position,setPosition]=useState('')
useEffect(()=>{
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setPosition({latitude,longitude})
            console.log(latitude,longitude)
             getAdress(longitude,latitude).then(data=>{
                setAdress(data)
             })
          })
        }
},[])
return [position,adress];
}
export default useCurrentLocation;