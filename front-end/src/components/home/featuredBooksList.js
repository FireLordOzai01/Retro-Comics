import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Animated } from 'react-animated-css';

import './featuredBooksList.css';

import { getFeatured, addToCart, removeFeatured, setSelectedBook } from './../../actions/users-actions'

class FeaturedBookList extends Component {
    state = {
        selectedBook: {},
        redirect: false
    }

    componentDidMount() {
        this.props.getFeatured();
    }

    addToCart = (book) => {
        this.props.addToCart(book);
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

    setSelectedBook = (book) => {
        this.props.setSelectedBook(book);
        this.setState({
            selectedBook: book,
            redirect: true
        })
    }

    onRedirect = (book) => {
        return <Redirect to={`/book/${book.title}`} />
    }

    onRemoveFeatured = id => {
        this.props.removeFeatured(id);
    }

    render() {
        return (
            this.state.redirect
                ?
                this.onRedirect(this.state.selectedBook)
                :
                <Animated animationIn="bounceInUp">
                    <div className="featured-bookList row">
                        {this.props.featuredBooks.map((b, index) => {
                            return (
                                <div key={index} className="featured-book col-4">
                                    <img onClick={() => this.setSelectedBook(b)} src={`${b.images[0].path}.jpg`} alt="comic book cover" />
                                    <p>{b.title}</p>
                                    {this.findPrice(b)}
                                    <button className="btn btn-outline-primary btn-sm"
                                        onClick={() => this.addToCart(b)}>Add to cart</button>
                                    <button className="btn btn-outline-danger btn-sm ml-3"
                                        onClick={() => this.onRemoveFeatured(b.id)}>X</button>
                                </div>
                            )
                        })}
                    </div>
                </Animated>
        );
    }
}

const mapStateToProps = state => ({
    featuredBooks: state.featuredBooks,
    loggedUser: state.loggedUser
});

const mapPropsToDispatch = dispatch => ({
    getFeatured: () => (dispatch(getFeatured())),
    removeFeatured: (id) => (dispatch(removeFeatured(id))),
    addToCart: (book) => (dispatch(addToCart(book))),
    setSelectedBook: (book) => (dispatch(setSelectedBook(book)))
});

export default connect(mapStateToProps, mapPropsToDispatch)(FeaturedBookList);