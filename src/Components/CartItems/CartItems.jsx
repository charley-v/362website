import React, { useContext } from 'react'
import './CartItems.css'
import {ShopContext} from '../../Context/ShopContext'
import removeicon from '../Assets/removeicon.png'


export const CartItems = () => {
    const {getTotalCartAmount, all_knifes, cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_knifes.map((e)=>{
            if(cartItems[e.id] > 0)
            {
                return <div>
                    <div className="cartitems-format">
                        <img src={e.image} alt='' className='carticon-product-icon'/>
                        <p>{e.name}</p>
                        <p>${e.knife_price}</p>
                        <button className='cartitems-quantity'> {cartItems[e.id]} </button>
                        <p>${e.knife_price*cartItems[e.id]}</p>
                        <img src={removeicon} width='30' height='30' className='cartitems-remove-icon' onClick={()=> {removeFromCart()}}   alt="" />
                    </div>
                    <hr />
             </div>
            }
            return null;
        })}
        <div className="cartitems-total">
                <h1>Cart Totals</h1>
            <div>
                <div className='cartitems-total-item'>
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount}</h3>
                </div>
            </div>
            <button>Proceed To Checkout</button>
        </div>
    </div>
  )
}

export default CartItems
