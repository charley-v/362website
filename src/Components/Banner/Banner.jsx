import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../Assets/cs2banner.png'
import './Banner.css'

export const Banner = () => {
  return (
    <div className='Banner'>
        <div className='bannerimg'>
        <img src={banner} alt="" />
        </div>
        <div className='sign'> 
            <h2>BUY & SELL</h2>
        </div>
        <div className='signb'>
            <p>CS2 Skins</p>
        </div>
        <div className='button'>
        <Link style={{textDecoration: 'None'}} to ='./knives'><button>Shop Now</button></Link>
        </div>
    </div>
  )
}
export default Banner
