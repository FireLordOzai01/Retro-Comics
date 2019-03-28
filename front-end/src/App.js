import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Admin from './components/admin/admin';
import MoreBooks from './components/moreBooks/moreBooks';
import Book from './book/book';
import Cart from './components/cart/cart'
import LogInForm  from './components/logIn/logIn-form';
import SignUpForm from './components/signup/signUp-form';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/more-books' render={() => <MoreBooks />} />
          <Route path='/admin' render={() => <Admin />} />
          <Route path='/cart' render={() => <Cart />} />
          <Route path='/book/:bookId' render={(renderProps) => <Book book={renderProps}/>} />
          <Route path='/login' render={() => <LogInForm />} />
          <Route path='/signup' render={() => <SignUpForm/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
