import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addUser } from '../../actions/users-actions'
import './signUp-form.css';

class SignUpForm extends Component {
    state = {
        fName: '',
        lName: '',
        username: '',
        password: '',
        confirmPassword: ''
    }

    onSignUp = e => {
        e.preventDefault();
        this.props.signUp(this.state)
        this.setState({
            fName: '',
            lName: '',
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <div className="container signup-container">
                <h1>Sign Up</h1>
                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text"
                            className="form-control"
                            placeholder="First name"
                            value={this.state.fName}
                            onChange={(e) => this.setState({ fName: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Last name"
                            value={this.state.lName}
                            onChange={(e) => this.setState({ lName: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={this.state.username}
                            onChange={(e) => this.setState({ username: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={(e) => this.setState({ password: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <input type="password"
                            className="form-control"
                            placeholder="Confirm password"
                            value={this.state.confirmPassword}
                            onChange={(e) => this.setState({ confirmPassword: e.target.value })} required />
                    </div>
                    <button
                        className="btn btn-outline-primary float-right"
                        onClick={(e) => this.onSignUp(e)}>Sign Up!</button>
                </form>
                <div>
                    <h3>Already a member?</h3>
                    <h3 className="login-link"><Link to='/login'>Log In</Link></h3>
                </div>
            </div>
        );
    }
}

const mapPropsToDispatch = dispatch => ({
    signUp: newUser => (dispatch(addUser(newUser)))
})

export default connect(null, mapPropsToDispatch)(SignUpForm);