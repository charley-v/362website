import React from 'react'
import { useState } from 'react'
import './CSS/Knives.css'
import all_knives from '../Components/Assets/all_knifes'
import Item from '../Components/Knife/Knife'

export const Knives = () => {


  const [searchInput, setSearchInput] = useState("")
    const handleChange = (e) =>{
        e.preventDefault()
        setSearchInput(e.target.value)
    }

  return (
    <div className='knives'>
      <form onSubmit="" role='search'>
        <label for="search">Search</label>
        <input id="search" type="search" placeholder='Search...'/>
        <button type='submit'>Go</button>
      </form>
    <h1>All Knives</h1>
    <div className='all-knives'>
      {all_knives.map((item, i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} knife_price={item.knife_price}/>
      })}
    </div>

  </div>
  )
}
