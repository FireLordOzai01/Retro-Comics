import React from 'react';
import { Animated } from 'react-animated-css'

import retroLogo from './../../../images/retroLogo.png';
import comicStack from './../../../images/comicStack.jpg';
import './banner.css';

const Banner = () => {
    return (
            <div>
                <div id="stackImg-container">
                    <img id="stackImg" src={comicStack} alt="" />
                </div>
                <div id="logo-container">
                    <img id="home-logo-name" src={retroLogo} alt="" />
                </div>
            </div>
    );
}

export default Banner;
