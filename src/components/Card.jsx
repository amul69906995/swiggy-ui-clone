import React from 'react'
import { FaStar } from "react-icons/fa6";
import '../css/Card.css'
import { Link } from 'react-router-dom';
const Card = (props) => {
  console.log(props)
  const { name, locality, cuisines, cloudinaryImageId, avgRatingString, id
  } = props?.data?.info

  return (
    <>
      <Link to={`/resturantmenu/${id}`}>
        <div className="card">
          <img className="card_img" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="image" />
          <span className='resturantName'>{name}</span>
          <span className="resturantRating">
            <FaStar></FaStar>
            <span>{avgRatingString}</span>
            <span>• {props.data.info.sla.deliveryTime} mins</span>
          </span>

          <span className='menu'>{cuisines.join(',')}</span>
          <span className="adress">{locality}</span>
        </div>
      </Link>
    </>
  )
}

export default Card;
