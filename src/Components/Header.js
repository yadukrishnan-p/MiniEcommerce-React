import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

function Header({cartItems}) {
  return (
    
       <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand d-flex">
                        <h1 style={{width:'30%' , color:'yellow'}}>Ycart</h1>
                        <img className='' width="50px" src="/images/Empty-Red-Shopping-Cart-PNG-High-Quality-Image-removebg-preview.png" />
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0">
                <Search/>
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <Link to={'/cart'}>
                        <span id="cart" className="ml-3">Cart</span>
                        <span className="ml-1" id="cart_count">{cartItems.length}</span>
                    </Link>
                </div>
            </nav>
  
  )
}

export default Header