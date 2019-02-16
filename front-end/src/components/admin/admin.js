import React, { Component } from 'react';
import AdminLoginForm from './adminLogin-form';

class Admin extends Component {
    state = { 

     }
    render() { 
        return ( 
            <div>
                <h1>Admin</h1>
                <AdminLoginForm />
            </div>
         );
    }
}
 
export default Admin;