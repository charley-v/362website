import React, {useState}from 'react'
import './Navbar.css'
import { Link} from 'react-router-dom'
import logo from '../Assets/knifexlogo.png'
import shopping_cart from '../Assets/shopping-cart.png'
import Dropdown from '../Dropdown/Dropdown'

const Navbar = () => {
    const  [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
        setDropdown(true);
    }
    const onMouseLeave = () => {
        setDropdown(false);
    }
    return (
        <div className = 'navbar'>
            <div className='nav-logo'>
                <img src={logo} alt = ''/>
            </div>
            <ul className="nav-menu">
                <li> <Link style={{textDecoration: 'None', color:'white'}} to='/'> Shop </Link></li>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> <Link style={{textDecoration: 'None', color:'white'}} to='./knives'>Knives </Link> {dropdown && <Dropdown />}</li>
                <li> <Link style={{textDecoration: 'None', color:'white'}} to='./sell'>Sell </Link></li>
                <li> <Link style={{textDecoration: 'None', color:'white'}} to='./about'>About </Link></li>
            </ul>
            <div className="nav-login-cart">
                <Link style={{textDecoration: 'None'}} to ='./login'><button>Login</button></Link>
                <Link style={{textDecoration: 'None'}} to ='./cart'><img src ={shopping_cart} /></Link>
                <div className="nav-cart-count"> 0 </div>
            </div>
        </div>
    )
}
export default Navbar