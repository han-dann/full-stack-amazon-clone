import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
     <Link to="/">
        <img 
         className="header_logo"
         src="https://mui.com/static/branding/companies/amazon-dark.svg"
        />
     </Link>

        <div
        className="header__search">
            <input
            className="header__searchInput" 
            type="text" />
            <FontAwesomeIcon icon={faMagnifyingGlass} 
            className="header__searchIcon"/>
        </div>

        <div className="header__nav">
          <Link to={!user && '/login'}>
          <div className="header__option">
              <span 
              className="header__optionLineOne">Hello
              {!user ? 'Guest' : user.email}</span>
              <span 
              className='header__optionLineTwo'> 
              {user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
              <span 
              className='header__optionLineOne'>Returns
              </span> 
              <span 
              className='header__optionLineTwo'> 
              & Orders</span>
          </div>
          </Link>
         
          <div className="header__option" >
              <span 
              className='header__optionLineOne'> Your
              </span>
              <span 
              className='header__optionLineTwo'> Prime
              </span>
          </div>

            <Link to="/checkout">
             <div className="header__optionBasket">
               <FontAwesomeIcon icon={faCartShopping} className="basket"/>
                 <span className="header__optionLineTwo header__basketCount">
                   {basket?.length}
                 </span>
             </div>
          </Link>
        </div>
     </div>
   )
}

export default Header