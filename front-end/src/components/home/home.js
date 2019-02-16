import React, { Component } from 'react';
import LogInForm from './logIn-form';
import SignUpForm from './signUp-form';
import FeaturedBookList from './featuredBooksList';
import retroLogo from './../../images/retroLogo.png';
import comicStack from './../../images/comicStack.jpg';


class Home extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <div id="stackImg-container">
                    <img id="stackImg" src={comicStack} alt="" />
                </div>
                <div id="logo-container">
                    <img id="home-logo-name" src={retroLogo} alt="" />
                </div>
                <div className="container">
                    <LogInForm />
                    <SignUpForm />
                </div>
                <div>
                    <h1 className="text-center">Featured Comics</h1>
                    <FeaturedBookList />
                </div>
            </div>
        );
    }
}


export default Home;