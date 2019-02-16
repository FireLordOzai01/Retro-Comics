import React, { Component } from 'react';
import MoreBooksList from './moreBooksList';
import comicRow from './../../images/comicRow.jpg';

class MoreBooks extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <div id="rowImg-container">
                    <img id="rowImg" src={comicRow} alt="" />
                </div>
                <div className="container">
                    <MoreBooksList />
                </div>
            </div>
        );
    }
}



export default MoreBooks;