import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUser } from '../../actions/users-actions'
import './login-form.css';

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
            <div className="container login-container">
                <div className="drop-down">
                    <h1>Login</h1>
                    <div className="drop-down-menu">
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
                    <div>
                        <h3>Not a member?</h3>
                        <h3 className="singup-link"><Link to='/signup'>Sign Up!</Link></h3>
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
