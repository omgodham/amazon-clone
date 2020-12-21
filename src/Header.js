import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
    return (
        <div className="header"> 
         <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
          <div className="header__input__block">
          <input type="text" className="header__input"/> 
          <SearchIcon className="header__search"/>     
          </div>
          <div className="header__nav">
            <div className="header__text">
            <span className="first__text">Hello Guest</span>
            <span className="Second__text">Sign In</span>
            </div>
            <div className="header__text">
            <span className="first__text">Returns</span>
            <span className="Second__text">& Orders</span>
            </div>
            <div className="header__text">
            <span className="first__text">Your</span>
            <span className="Second__text">prime</span>
            </div>
            <div className="header__basket">
            <ShoppingBasketIcon />
            <span>0</span>
            </div>
            </div>
        </div>
    )
}

 export default Header;
