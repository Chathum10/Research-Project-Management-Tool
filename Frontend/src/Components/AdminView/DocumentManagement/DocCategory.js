import React, { Component } from 'react';
import '../../Background/background.css';

class DocCategory extends Component {
 
  render() {
    return (
      <div class="dashboard">
            <div className="col-lg-6">
              <div className="login-right">
                <h1>Upload Documents TO</h1>
                <button><a href="/StudntDoc">STUDENT</a></button>
                <button><a href="/SupervisorDoc">SUPERVISOR</a></button>
                <button><a href="/PannelMemberDoc">PANNEL MEMBER</a></button>


              </div>
            </div>
            </div>


    );
  }
}

export default (DocCategory);
