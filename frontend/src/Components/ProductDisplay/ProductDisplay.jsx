import React, { useContext } from 'react'
import { Link} from 'react-router-dom'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';
import closebutton from '../Assets/closebutton.png'


export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);


  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
           {/*} <div className="productdisplay-img-list">
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>*/}
            <div className="productdisplay-img">
                <img className= 'productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-prices">
                ${product.knife_price}
            </div>
            <div className="productdisplay-right-description">
                Description:
            </div>
            <div className="productdisplay-right-wear">
                <h1>Select Wear</h1>
                <div className="productdisplay-right-wears">
                    <div>Factory New</div>
                    <div>Minimal Wear</div>
                    <div>Field Tested</div>
                    <div>Well-Worn</div>
                    <div>Battle-Scarred</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <div className="goback">
            <Link to='/knives'><img src={closebutton} width='30' height='30' alt=""/> </Link>
            </div>
        </div>    
    </div>
  )
}
export default ProductDisplay
