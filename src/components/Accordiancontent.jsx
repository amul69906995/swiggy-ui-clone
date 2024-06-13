import React from 'react'
import '../css/Accordiancontent.css'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
const Accordiancontent = (props) => {
    const {accordiancontent : content}=props;
    const dispatch=useDispatch();
    const handleClick=()=>{
     dispatch(addItem(content))
    }
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-name">{content.name}</div>
        <div className="card-price">₹{content.price / 100}</div>
      </div>
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${content.imageId}`} alt="" className="card-image" />
      <div className="card-body">
        <p className="card-description">{content.description}</p>
        {content.isBestseller && <span className="bestseller-tag">Bestseller</span>}
        {content.isVeg && <span className="veg-tag">Veg</span>}
        <button onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Accordiancontent
