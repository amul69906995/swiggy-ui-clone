import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import '../css/Body.css'
import Loading from './Loading';
import useInternetStatus from '../utils/useInternetStatus';
import { useNavigate} from 'react-router-dom';
import { userContext } from '../context/usercontext.js';
const Body = () => {
const navigate=useNavigate();
  const [data, setData] = useState([]);
  const [searchedData, setSearchedData] = useState(null)
  const [searchText, setSearchText] = useState('')
  const isOnline = useInternetStatus();
  const {userName,setUserName}=useContext(userContext);
  useEffect(() => {
    getData();
  }, [])
  const handleFilter=(e)=>{
navigate(`/filter?filterValue=${e.target.value}`)
};
  
  async function getData() {
    let res = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=25.3176452&lng=82.9739144')
    const result = await res.json();
    console.log(result);
    console.log(result?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    setData(result?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    setSearchedData(result?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
  }
  if (!searchedData) {
    return (<><Loading></Loading></>)
  }
  if (!isOnline) {
    return (<h1>you are offline</h1>)
  }
  return (
    <>
    <div className='body_container'>
    <div className="container1">
      <input type="text" placeholder='search Any resturant' value={searchText} onChange={
        (e) => {
          setSearchText(e.target.value)
        }
      } />
      <button onClick={() => {
        let res = data.filter(resturant => resturant.info?.name.toLowerCase().includes(searchText.toLowerCase()))
        console.log(res);
        setSearchedData(res);
        setSearchText('')
      }}>Search in home</button>
      </div>
      <div className='container2'>
      <label htmlFor="">USERNAME:</label>
      <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
      </div>
      </div>
      <select defaultValue='' onChange={handleFilter}>
        <option value="4">Rating greater than 4</option>
        <option value="3">Rating greater than 3</option>
        <option value="2">Rating greater than 2</option>
        <option value="1">Rating greater than 1</option>
      </select>

      <div className="body_container_card">
        {searchedData.map((resturant, index) => {
          return (<Card key={index} data={resturant} />)
        })}
      </div>

    </>
  )
}

export default Body;
