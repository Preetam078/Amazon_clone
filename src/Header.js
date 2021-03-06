import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const[{basket,user}, dispatch]=useStateValue();

    const handleAuthentication =() =>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"/>
            </Link>
        
            <div className="header__search">
                <input className="header__searchInput"
                type= "text" />
                <SearchIcon className = "header__searchIcon"/>
           </div>
           <div className="header__nav">
           <Link to={!user && '/Login'}>
                <div onClick={handleAuthentication} className="header__option">
                <span className="header_optionLineOne">Hello,{user?.email}</span>
                <span className="header_optionLineTwo">{user ?"Sign Out":"Sign In"}</span>
                </div>
            </Link>

               <div className="header__option">
               <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo">& Orders</span>
                </div>
               <div className="header__option">
               <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Prime</span>
                </div>
               <div className="header__option">
               <span className="header_optionLineOne"></span>
                <span className="header_optionLineTwo"></span>
                </div>
                <Link to ="/checkout">
                <div className="header_optionBasket"> 
                 <ShoppingCartIcon/>
                 <span className="header_optionLineTwo header_BasketCount">{basket.length}</span>
                </div>
                </Link>
                
           </div>
        </div>
    )
}

export default Header
