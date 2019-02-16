import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from './../../actions/users-actions';
import './cart.css';

class Cart extends Component {
    state = {
    }

    findPrice = (book) => {
        return book.prices.length === 1 && book.prices[0].price === 0
            ?
            <p>$1</p>
            :
            book.prices[0].price !== 0
                ?
                <p>{`$${book.prices[0].price}`}</p>
                :
                book.prices.length !== 1
                    ?
                    <p>{`$${book.prices[1].price}`}</p>
                    :
                    ""
    }

    removeFromCart = (book, index) => {
        this.props.removeFromCart(book, index);
    }

    render() {
        return (
            <div className="container">
                <h1>Shopping Cart</h1>
                <h2>{`Total: $${this.props.cartTotal}`}</h2>
                <h3>{`Total Items: ${this.props.guestCart.length}`}</h3>
                {this.props.goodLogin
                    ?
                    console.log("user logged in")
                    :
                    this.props.guestCart.length > 0
                        ?
                        this.props.guestCart.map((b, index) => {
                            return (
                                <div key={index} className="cart-item">
                                    <div className="row">
                                        <div className="col">
                                            <h5>{b.title}</h5>
                                            <img src={`${b.images[0].path}.jpg`} alt="comic book cover" />
                                            {this.findPrice(b)}
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-outline-danger btn-sm remove-btn"
                                                onClick={() => this.removeFromCart(b, index)}>x</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <h2>Shopping cart is empty</h2>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    guestCart: state.guestUserCart,
    goodLogin: state.goodLogin,
    cartTotal: state.cartTotal
})

const mapPropsToDispatch = dispatch => ({
    removeFromCart: (book, index) => dispatch(removeFromCart(book, index))
})

export default connect(mapStateToProps, mapPropsToDispatch)(Cart);