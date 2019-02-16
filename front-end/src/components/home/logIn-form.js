import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from './../../actions/users-actions'

class LogInForm extends Component {
    state = {
        username: '',
        password: ''
    }

    onLogIn = e => {
        e.preventDefault();
        this.props.logIn(this.state)
    }

    render() {
        return (
            <div className="container">
                <h2>Log In</h2>
                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Log In
                    </a>
                    <div className="dropdown-menu">
                        <form >
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    value={this.state.username}
                                    onChange={(e) => this.setState({ username: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    value={this.state.password}
                                    onChange={(e) => this.setState({ password: e.target.value })} />
                            </div>
                            <button
                                className="btn btn-outline-primary float-right"
                                onClick={(e) => this.onLogIn(e)}>Log In</button>
                        </form>
                    </div>
                </div>


            </div>
        );
    }
}

const mapPropsToDispatch = dispatch => ({
    logIn: user => (dispatch(getUser(user)))
});


export default connect(null, mapPropsToDispatch)(LogInForm);
