import axios from 'axios';
import { ADD_USER, 
         LOGIN, 
         GET_BOOKS, 
         GET_FEATURED, 
         ADD_TO_CART, 
         REMOVE_FROM_CART, 
         REMOVE_FEATURED,
         ADD_FEATURED,
         SELECTED_BOOK } from './../constants/constants'


export const addUser = newUser => async dispatch => {
    let response = await axios.post('http://localhost:5000/users', newUser); 
    dispatch({ type: ADD_USER, payload: response.data})
}

export const getUser = user => async dispatch => {
    let response = await axios.post('http://localhost:5000/users/login', user);
    dispatch({ type: LOGIN, payload: response.data})
}

export const getBooks = () => async dispatch => {   
    let response = await axios.get('http://localhost:5000/books');
    //filter out books that have no image or description
    dispatch({ type: GET_BOOKS, payload: response.data.data.results.filter(book => book.images.length !== 0 && book.description !== null) })
}

export const getFeatured = () => async dispatch => {
    let response = await axios.get('http://localhost:5000/featuredBooks')
    dispatch({ type: GET_FEATURED, payload: response.data.data })
}

export const removeFeatured = id => async dispatch => {
    let response = await axios.delete(`http://localhost:5000/featuredBooks/${id}`)
    dispatch({ type: REMOVE_FEATURED, payload: response.data.data })
}

export const addFeatured = book => async dispatch => {
    let response = await axios.post('http://localhost:5000/featuredBooks', book)
    dispatch({ type: ADD_FEATURED, payload: response.data.data })
}

export const addToCart = (book, index) => ({ type: ADD_TO_CART, book: book, index: index });

export const removeFromCart = (book, index) => ({ type: REMOVE_FROM_CART, book: book, index: index });

export const setSelectedBook = book => ({ type: SELECTED_BOOK, book: book});