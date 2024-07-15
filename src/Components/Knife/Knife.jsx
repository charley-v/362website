import React from 'react'
import './Knife.css'
import { Link } from 'react-router-dom'

export const Knife = (props) => {
  return (
    <div className='knife'>
        <Link to={`/product/${props.id}`}><img src={props.image} style={{height:250, width:250}} alt = ''/> </Link>
        <p>{props.name}</p>
        <div className='knife_price'>
            ${props.knife_price}
        </div>

    </div>
  )
}

export default Knife
