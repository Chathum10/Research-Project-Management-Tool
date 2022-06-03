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
                  You are Successfully logged into Pannel Member Dashboard
                </h3>
                <button
                  onClick={this.onLogoutClick}
                  className="btn btn-lg btn-warning mt-5"
                >
                  Logout
                </button>
                <button><a href="/VivaMarking">Final Presentation Evaluation</a></button>
                <button><a href="/PTopicRegDocs">Student Topic Registration Documents</a></button>
                <button><a href="/PanelDetailsList">View My Panel</a></button>
                <button><a href="/FinalTopicDetails">Accept/Reject Registered Topics</a></button>
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
