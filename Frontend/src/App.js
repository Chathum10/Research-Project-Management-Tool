import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

import LoginAs from './Components/Auth/LoginAs';
import AdminLogin from './Components/Auth/AdminLogin';
import StudentLogin from './Components/Auth/StudentLogin';
import SupervisorLogin from './Components/Auth/SupervisorLogin';
import CoSupervisorLogin from './Components/Auth/CoSupervisorLogin';
import PannelMemberLogin from './Components/Auth/PannelMemberLogin';

import AdminDashboard from './Components/Dashboard/AdminDashboard';
import StudentDashboard from './Components/Dashboard/StudentDashboard';
import SupervisorDashboard from './Components/Dashboard/SupervisorDashboard';
import CoSupervisorDashboard from './Components/Dashboard/CoSupervisorDashboard';
import PannelMemberDashboard from './Components/Dashboard/PannelMemberDashboard';

import Register from './Components/Auth/Register';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import { Provider } from 'react-redux';
import store from './redux/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './redux/actions/authActions';
import PrivateRoute from './Components/private-route/PrivateRoute';



function App() {
  // Check for token to keep user logged in
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded)); // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser()); // Redirect to login
      window.location.href = './login';
    }
  }
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/loginAs" component={LoginAs} />

          <Route path="/Adminlogin" component={AdminLogin} />
          <Route path="/Studentlogin" component={StudentLogin} />
          <Route path="/Supervisorlogin" component={SupervisorLogin} />
          <Route path="/CoSupervisorlogin" component={CoSupervisorLogin} />
          <Route path="/PannelMemberlogin" component={PannelMemberLogin} />

          <Switch>
            <PrivateRoute exact path="/AdminDashboard" component={AdminDashboard} />
            <PrivateRoute exact path="/StudentDashboard" component={StudentDashboard} />
            <PrivateRoute exact path="/SupervisorDashboard" component={SupervisorDashboard} />
            <PrivateRoute exact path="/CoSupervisorDashboard" component={CoSupervisorDashboard} />
            <PrivateRoute exact path="/PannelMemberDashboard" component={PannelMemberDashboard} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
