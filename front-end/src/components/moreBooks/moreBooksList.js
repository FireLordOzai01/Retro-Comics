import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Animated } from 'react-animated-css';

import { getBooks, addToCart, getFeatured, removeFeatured, addFeatured, setSelectedBook } from './../../actions/users-actions';
import './moreBooksList.css';

import loadingGif from './../../images/loading.gif';

class MoreBooksList extends Component {
    state = {
        total: 0,
        selectedBook: {},
        redirect: false,
        pagesStart: 0,
        pagesEnd: 5
    }

    componentDidMount() {
        this.props.getBooks();
        this.props.getFeatured();
    }

    addToCart = book => {
        this.props.addToCart(book);
    }

    findPrice = book => {
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

    onRemoveFeatured = id => {
        this.props.removeFeatured(id);
    }

    onAddFeatured = book => {
        this.props.addFeatured(book);
    }

    //determines if a book is in the featured array, if it is return true if not return false
    isFeatured = id => {
        let index = this.props.featuredBooks.findIndex(book => book.id === id);
        if (index === -1) {
            return false;
        } else {
            return true;
        }
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

    morePages = () => {
        this.setState({
            pagesStart: this.state.pagesStart + 5,
            pagesEnd: this.state.pagesEnd + 5
        })
    }

    lessPages = () => {
        this.setState({
            pagesStart: this.state.pagesStart - 5,
            pagesEnd: this.state.pagesEnd - 5
        })
    }

    render() {
        return (
            <div className="morebooks-container">
                {this.state.redirect
                    ?
                    this.onRedirect(this.state.selectedBook)
                    :
                    this.props.books.length < 1
                        ?
                        <div className="loading-gif-container">
                            <img className="loading-gif" src={loadingGif} alt="loading" />
                        </div>
                        :
                        this.props.books.map((b, index) => {
                            return (
                                index > this.state.pagesStart && index <= this.state.pagesEnd &&
                                <div key={index} className="more-book">
                                    <h5>{b.title}</h5>
                                    <img className="comic-image" onClick={() => this.setSelectedBook(b)}
                                        src={`${b.images[0].path}.jpg`} alt="comic book cover" />
                                    <p>{b.description}</p>
                                    <button className="btn btn-outline-primary btn-sm"
                                        onClick={() => this.addToCart(b)}>Add to cart</button>
                                    {this.isFeatured(b.id)
                                        ? <button className="btn btn-outline-danger btn-sm ml-3"
                                            onClick={() => this.onRemoveFeatured(b.id)}>X</button>
                                        :
                                        <button className="btn btn-outline-success btn-sm ml-3"
                                            onClick={() => this.onAddFeatured(b)}>+</button>
                                    }
                                </div>
                            )
                        })}
                <div className="more-less-container">
                    {this.state.pagesStart > 0 ? <h5 className="less-btn" onClick={() => this.lessPages()}>&larr; Back</h5> : ""}
                    <h5 className="more-btn" onClick={() => this.morePages()}>Next &rarr;</h5>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    books: state.books,
    featuredBooks: state.featuredBooks,
    loggedUser: state.loggedUser
})

const mapPropsToDispatch = dispatch => ({
    getBooks: () => (dispatch(getBooks())),
    getFeatured: () => (dispatch(getFeatured())),
    addFeatured: (book) => (dispatch(addFeatured(book))),
    removeFeatured: (id) => (dispatch(removeFeatured(id))),
    addToCart: (book) => (dispatch(addToCart(book))),
    setSelectedBook: (book) => (dispatch(setSelectedBook(book)))
});

export default connect(mapStateToProps, mapPropsToDispatch)(MoreBooksList);