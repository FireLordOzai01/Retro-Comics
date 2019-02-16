import { LOGIN, 
         ADD_USER, 
         GET_BOOKS, 
         GET_FEATURED, 
         ADD_TO_CART, 
         REMOVE_FROM_CART, 
         REMOVE_FEATURED,
         ADD_FEATURED,
         SELECTED_BOOK } from './../constants/constants';

const initialState = {
    loggedUser: {},
    guestUserCart: [],
    books: [],
    featuredBooks: [],
    selectedBook: {},
    goodLogin: false,
    cartTotal: 0
}

const calcTotal = (selectedBook) => {
    var book = selectedBook;
    var total = 0;
    //checks for book without a price and gives them a default price of $1
        if (book.prices.length === 1 && book.prices[0].price === 0) {
            total = total + 1;
        } else if (book.prices[0].price !== 0) {
            total = total + book.prices[0].price;
        } else if (book.prices.length !== 1) {
            total = total + book.prices[1].price;
        }

    return total;
}


const rootReducer = (state = initialState, action) => {
    let updatedState;
    let updatedCart;
    let bookPrice;

    switch(action.type){

        case LOGIN:
        updatedState = {
            ...state,
            loggedUser: action.payload
        }
        return updatedState;
        
        case ADD_USER:
        updatedState = {
            ...state,
            loggedUser: action.payload
        }
        return updatedState;

        case GET_BOOKS:
        updatedState = {
            ...state,
            books: action.payload
        }
        return updatedState;

        case GET_FEATURED:
        updatedState = {
            ...state,
            featuredBooks: action.payload
        }
        return updatedState;

        case REMOVE_FEATURED:
        updatedState = {
            ...state,
            featuredBooks: action.payload
        }
        return updatedState;

        case ADD_FEATURED:
        updatedState = {
            ...state,
            featuredBooks: action.payload
        }
        return updatedState;

        case SELECTED_BOOK:
        updatedState = {
            ...state,
            selectedBook: action.book
        }
        return updatedState;

        case ADD_TO_CART:
        bookPrice = calcTotal(action.book);
        updatedCart = [...state.guestUserCart];
        updatedCart.push(action.book)
        if(state.goodLogin){
        } else{
            updatedState = {
                ...state,
                guestUserCart: updatedCart,
                cartTotal: state.cartTotal + bookPrice
            }
        }
        return updatedState;
        
        case REMOVE_FROM_CART:
        bookPrice = calcTotal(action.book);
        let newCartTotal = (state.cartTotal * 100 - bookPrice * 100)/ 100;
        updatedCart = [...state.guestUserCart];
        updatedCart.splice(action.index, 1);
        if(state.goodLogin){
        } else{
            updatedState = {
                ...state,
                guestUserCart: updatedCart,
                cartTotal: newCartTotal
            }
        }
        return updatedState;

        default:
        return state;
    }
}

export default rootReducer;