import React from 'react'
import './Knife.css'

export const Knife = (props) => {
  return (
    <div className='knife'>
        <img src={props.image} style={{height:250, width:250}} alt = ''/>
        <p>{props.name}</p>
        <div className='knife_price'>
            ${props.knife_price}
        </div>

    </div>
  )
}

export default Knife
