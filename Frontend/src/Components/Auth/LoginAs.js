import React, { Component } from 'react';
import './Auth.css';
import './loginas.css';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';


class LoginAs extends Component {
 
  render() {
    return (
      <div  id="banner2">
            <div className="col-lg-6" >
              <div className="login-right" >
                
                <button><a href="/Adminlogin">ADMIN</a></button>
                <button><a href="/Studentlogin">STUDENT</a></button>
                <button><a href="/Supervisorlogin">SUPERVISOR</a></button>
                <button><a href="/CoSupervisorlogin">CO-SUPERVISOR</a></button>
                <button><a href="/PannelMemberlogin">PANNEL MEMBER</a></button>


              </div>
            </div>

</div>
    );
  }
}

export default (LoginAs);
