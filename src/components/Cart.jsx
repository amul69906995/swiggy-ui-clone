import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeItem ,emptyCart} from '../redux/cartSlice'
import '../css/cart.css'
const Cart = () => {
  const items=useSelector(store=>store.cart.items)
  const dispatch=useDispatch();
  console.log(items);
  let totalprice;
  
  const calculateTotalPrice=()=>{
    totalprice=items.reduce( (acc,item)=> acc+item.price ,0 )
    
  
    return totalprice/100;
  }
  calculateTotalPrice();
  return (
    <div className='cart'>
    <h1>your cart</h1>
  
   <button onClick={()=>dispatch(emptyCart())}>clear cart</button>
     {items.map((item,idx)=>(    
    <div className="cart_list" key={idx}>
    <span>{item.name}</span>
    <span>{item.price/100}</span>

   </div>))} 
  
   <hr />
   <div className="cart_total">
   <span>total</span>
   <span>Rs.{calculateTotalPrice()}</span>
   </div>
    </div>
  )
}

export default Cart
