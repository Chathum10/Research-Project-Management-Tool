import React, { Component } from 'react';


class DocCategory extends Component {
 
  render() {
    return (
            <div className="col-lg-6">
              <div className="login-right">
                <h1>Upload Documents TO</h1>
                <button><a href="#">STUDENT</a></button>
                <button><a href="/SupervisorDoc">SUPERVISOR</a></button>
                <button><a href="/PannelMemberDoc">PANNEL MEMBER</a></button>


              </div>
            </div>


    );
  }
}

export default (DocCategory);
