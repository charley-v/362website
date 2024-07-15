import React from 'react'
import './Trending.css'
import data_product from '../Assets/data'
import Knife from '../Knife/Knife'



export const Trending = () => {
  return (
    <div className='trending'>
      <h1>Trending Knives</h1>
      <div className='trending-item'>
        {data_product.map((knife, i)=>{
          return <Knife key={i} id={knife.id} name={knife.name} image={knife.image} knife_price={knife.knife_price}/>
        })}
      </div>

    </div>
  )
}

export default Trending