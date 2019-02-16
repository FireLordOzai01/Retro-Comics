import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  retroLogo  from './../../images/retroLogo.png';
import './navbar.css';

const Navbar = (props) => {
    return (
        <div className="nav-container">
            <img className="logo-name" src={retroLogo} alt=""/>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/more-books'>More Books</Link>
                <Link to='/cart'><i className="fas fa-shopping-cart">
                    {props.cart.length > 0 
                        ? <span className="badge badge-light">{props.cart.length}</span>
                        : <span className="badge badge-light"></span>}
                    </i>
                </Link>
            </nav>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.guestUserCart
})

export default connect(mapStateToProps)(Navbar);