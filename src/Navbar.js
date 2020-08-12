import React from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';

const Navbar = (props) =>{
    return(
            <>
               <div className="topnav">
                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                      <h2 >Movies List </h2>
                      <NavLink to="/" className="nav-link active Home_btn">
                         <i className="fa fa-home"></i> Home
                      </NavLink>
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                              <NavLink className="nav-link active"  to="/mylist">
                                  <div className="cart-btn">
                                    <span className="nav-icon itemIcon_style">
                                        <i className="fa fa-list"></i> Movies List
                                    </span>
                                        <div className="counter_style">{props.totalAddedLitsItem}</div>
                                  </div>
                              </NavLink>
                            </li>
                        </div>
                  </nav>
                </div>
            </>

          );
     }

export default Navbar;

