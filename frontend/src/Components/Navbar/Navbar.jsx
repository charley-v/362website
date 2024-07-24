import React, {useContext, useEffect, useState}from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './Navbar.css'
import { Link} from 'react-router-dom'
import logo from '../Assets/logo.png'
import shopping_cart from '../Assets/shopping-cart.png'
import Dropdown from '../Dropdown/Dropdown'
import { ShopContext } from '../../Context/ShopContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Navbar = (props) => {
    const  [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
        setDropdown(true);
    }
    const onMouseLeave = () => {
        setDropdown(false);
    }

    const navigate = useNavigate();
    function logMeOut() {
        axios({
            method: "POST",
            url:"http://127.0.0.1:5000/logout",
        })
        .then((response) => {
            props.token()
            localStorage.removeItem('email')
            navigate("/");
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }
    const logged = localStorage.getItem('email');

    const {getTotalCartItems} = useContext(ShopContext);
    return (
        <div className = 'navbar'>
            <div className='nav-logo'>
               <Link to='/'> <img width='120' src={logo} alt = ''/></Link>
            </div>
            <ul className="nav-menu">
                <li> <Link style={{textDecoration: 'None', color:'white'}} to='/'> Home </Link></li>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> <Link style={{textDecoration: 'None', color:'white'}} to='./knives'>Knives </Link> {dropdown && <Dropdown />}</li>
                <li> <Link style={{textDecoration: 'None', color:'white'}} to='./login'>Sell </Link></li>
                <li> <Link style={{textDecoration: 'None', color:'white'}} to='./about'>About </Link></li>
            </ul>


            <div className="nav-login-cart">

                
                {!logged? 
                <Link style={{textDecoration: 'None'}} to ='./login'><button>Login</button></Link>:
                <Link style={{textDecoration: 'None'}} type='submit' onClick={logMeOut}><button>Logout</button></Link>
                }



                <Link style={{textDecoration: 'None'}} to ='./cart'><img src ={shopping_cart} /></Link>
                <div className="nav-cart-count"> {getTotalCartItems()}</div>
            </div>
        </div>
    )
}
export default Navbar

