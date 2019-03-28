import React, { Component } from 'react';
import FeaturedBookList from './featuredBooksList';
import Banner from './banner/banner';


class Home extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <div>
                    <Banner />
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