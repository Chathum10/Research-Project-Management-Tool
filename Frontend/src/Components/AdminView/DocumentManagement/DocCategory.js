import React, { Component } from 'react';
import '../../Background/background.css';
import '../../Auth/loginas.css'
// import '../../Background/background.css';

class DocCategory extends Component {
 
  render() {
    return (
      // <div class="dashboard">
      //       <div className="col-lg-6">
      //         <div className="login-right">
      //           <h1>Upload Documents TO</h1>
      //           <button><a href="/StudntDoc">STUDENT</a></button>
      //           <button><a href="/SupervisorDoc">SUPERVISOR</a></button>
      //           <button><a href="/PannelMemberDoc">PANNEL MEMBER</a></button>
      //       <div className="col-lg-6">
      //         <div className="login-right">
      //           <h1>Upload Documents TO</h1>
      //           <button><a href="/StudntDoc">STUDENT</a></button>
      //           <button><a href="/SupervisorDoc">SUPERVISOR</a></button>
      //           <button><a href="/PannelMemberDoc">PANNEL MEMBER</a></button>


      // //         </div>
      // //       </div>
      // //       </div>

      <div  id="banner2">
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
