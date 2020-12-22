import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import {auth} from  "./firebase";

function Header() {
    const [{ basket,user }, dispatch] = useStateValue();
    
      const handleAuthentication =() => {
          if(user) {
              auth.signOut();
          }
      }

    return (
        <div className="header"> 
        <Link to="/"> <img className="header__logo"
         src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" /></Link>
          <div className="header__input__block">
          <input type="text" className="header__input"/> 
          <SearchIcon className="header__search"/>     
          </div>
          <div className="header__nav">
            <Link to={!user && '/login'}>
            <div className="header__text" onClick={handleAuthentication}>
            <span className="first__text">Hello {!user ? 'Guest' : user.email}</span>
            <span className="Second__text">{user ? 'Sign Out' : 'Sign In'}</span>
            </div></Link>
            <div className="header__text">
            <span className="first__text">Returns</span>
            <span className="Second__text">& Orders</span>
            </div>
            <div className="header__text">
            <span className="first__text">Your</span>
            <span className="Second__text">prime</span>
            </div>
            <Link to="/checkout"><div className="header__basket">
            <ShoppingBasketIcon />
            <span>{basket?.length}</span>
            </div>
            </Link>
            </div>
        </div>
    )
}

 export default Header;
