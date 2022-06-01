import React, { Component } from 'react';
import './Auth.css';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';


class LoginAs extends Component {
 
  render() {
    return (
            <div className="col-lg-6">
              <div className="login-right">
                <h1>Login As</h1>
                <button><a href="/Adminlogin">ADMIN</a></button>
                <button><a href="/Studentlogin">STUDENT</a></button>
                <button><a href="">SUPERVISOR</a></button>
                <button><a href="">CO-SUPERVISOR</a></button>
                <button><a href="">PANNEL MEMBER</a></button>


              </div>
            </div>


    );
  }
}

export default (LoginAs);
