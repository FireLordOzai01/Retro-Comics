import React, { Component } from 'react';

class AdminLoginForm extends Component {
    state = { 
        username: '',
        password: ''
     }
    render() { 
        return ( 
            <div className="container">
                <h2>Log In</h2>
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input  type="text" 
                                className="form-control" 
                                placeholder="Enter username" 
                                value={this.state.username}
                                onChange={(e) => this.setState({ username: e.target.value })}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input  type="text" 
                                className="form-control"  
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={(e) => this.setState({ password: e.target.value })}/>
                    </div>
                    <button 
                        className="btn btn-outline-primary float-right"
                        onClick={(e) => this.onLogIn(e)}
                        >Log In</button>
                </form>
            </div>
         );
    }
}
 
export default AdminLoginForm;