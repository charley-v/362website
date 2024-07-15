import React from 'react'
import './ProductDisplay.css'


export const ProductDisplay = (props) => {
    const {product} = props;


  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
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
                A Cool Knife
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
            <button>ADD TO CART</button>
        </div>    
    </div>
  )
}
export default ProductDisplay
