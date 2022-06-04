import React, { Component } from 'react';

class DocCategory extends Component {
 
  render() {
    return (

      <div>
            <div className="col-lg-6" >
              <div className="login-right" >
              <h1>Upload Documents TO</h1>
                <br></br><br></br><br></br>
                <ul>
                  
                <li ><span><a href="/StudntDoc">STUDENT</a></span></li>
                <li><span><a href="/SupervisorDoc">SUPERVISOR</a></span></li>
                <li><span><a href="/PannelMemberDoc">PANNEL MEMBER</a></span></li>
                </ul>

              </div>
            </div>


</div>

    );
  }
}

export default (DocCategory);
