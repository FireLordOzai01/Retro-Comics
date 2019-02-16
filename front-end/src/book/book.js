import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './../actions/users-actions';
import './book.css';

const Book = (props) => {
    return (
        <div className="container">
            <div className="row">
                <h1 className="title">{props.book.title}</h1>
            </div>
            <div className="row">
                <div className="col left-col">
                    <img className="comic-cover" src={`${props.book.images[0].path}.jpg`} alt="comic book cover" />
                </div>
                <div className="col right-col">
                    <div>
                        <p>{props.book.description}</p>
                        {findPrice(props.book)}
                    </div>
                    <div>
                        <button className="btn btn-outline-primary btn-sm"
                            onClick={() => props.addToCart(props.book)}>Add to Cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
}


const findPrice = (book) => {
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

const mapStateToProps = state => ({
    book: state.selectedBook
})

const mapPropsToDispatch = dispatch => ({
    addToCart: (book) => (dispatch(addToCart(book)))
})

export default connect(mapStateToProps, mapPropsToDispatch)(Book);