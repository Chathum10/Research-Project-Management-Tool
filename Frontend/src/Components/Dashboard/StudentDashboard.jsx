import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import './Dashboard.css';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1>
                  H! <b>{user.name.split(' ')[0]} </b>
                </h1>
                <h3>
                  You are Successfully logged into Student Dashboard
                </h3>
                <button
                  onClick={this.onLogoutClick}
                  className="btn btn-lg btn-warning mt-5"
                >
                  Logout
                </button>
                {/* <button><a href="/SubTemplates">Subbmissions</a></button>
                <button><a href="/STopics">Topic Registration</a></button>
                <button><a href="/GroupList">Group Registration</a></button> */}


<table width="100%" >
        <th>
        <div id="btnNew">
        <button id="foot" class="btn1"><button class="button-os"><a href="/SubTemplates">Subbmissions</a></button></button>
        </div>
        </th>
        <tr>
          <td>
        <div id="btnNew">
        <button id="foot" class="btn1"><button class="button-os"><a href="/STopics">Topic Registration</a></button></button>
        </div>
        </td>
        </tr>
        <tr>
          <td>
          <div id="btnNew">
        <button id="foot" class="btn1"><button class="button-os"><a href="/GroupList">Group Registration</a></button></button>
        </div>
          </td>
          
        </tr>
        
        </table>






              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
