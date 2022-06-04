import React, { Component } from 'react';

class ViewRoles extends Component {
 
  render() {
    return (
      <div>
            <div className="col-lg-6" >
              <div className="login-right" >
                
                 <h1>Here View User Roles!</h1>

                <br></br><br></br><br></br>
                <ul>
                <li><span><a href="/StudentDashboard">STUDENT</a></span></li>
                <li><span><a href="/SupervisorDashboard">SUPERVISOR</a></span></li>
                <li><span><a href="/CoSupervisorDashboard">CO-SUPERVISOR</a></span></li>
                <li><span><a href="/PannelMemberDashboard">PANEL MEMBER</a></span></li>
                </ul>


              </div>
            </div>

</div>
    );
  }
}

export default (ViewRoles);
