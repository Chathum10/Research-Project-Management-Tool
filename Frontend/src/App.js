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

//Administrator View
import Users from './Components/AdminView/UserManagement/Users';
import EditUser from './Components/AdminView/UserManagement/EditUser';

import DocCategory from './Components/AdminView/DocumentManagement/DocCategory';
import SupervisorDoc from './Components/AdminView/DocumentManagement/SupervisorDoc';
import PannelMemberDoc from './Components/AdminView/DocumentManagement/PannelMemberDoc';
import StudntDoc from './Components/AdminView/DocumentManagement/StudentDoc';

//Student View
import SubTemplates from './Components/StudentView/DocSubbmissions/SubTemplates';
import STopicRegDocs from './Components/StudentView/DocSubbmissions/STopicRegDocs';
import UploadTRD from './Components/StudentView/DocSubbmissions/UploadTRD';
import SFinalDocs from './Components/StudentView/DocSubbmissions/SFinalDocs';
import UploadFinalDoc from './Components/StudentView/DocSubbmissions/UploadFinalDoc';

//Supervisor View
import DocMarking from './Components/SupervisorView/EvaluateDocuments/DocMarking';
import SupervisorFDocs from './Components/SupervisorView/EvaluateDocuments/SupervisorFDocs';

//Pannel Member View
import VivaMarking from './Components/PannelMemberView/EvaluatePresentations/VivaMarking';
import PTopicRegDocs from './Components/PannelMemberView/EvaluateDocuments/PTopicRegDocs';


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

          {/* Admin View */}
          <Route path="/userProfiles" component={Users} />
          <Route path="/EditUser/:id" component={EditUser} />
          <Route path="/DocCategory" component={DocCategory} />
          <Route path="/SupervisorDoc" component={SupervisorDoc} />
          <Route path="/PannelMemberDoc" component={PannelMemberDoc} />
          <Route path="/StudntDoc" component={StudntDoc} />

          {/* Supervisor View */}
          <Route path="/DocMarking" component={DocMarking} />
          <Route path="/SupervisorFDocs" component={SupervisorFDocs}/>

          {/* Pannel Member View */}
          <Route path="/VivaMarking" component={VivaMarking} />
          <Route path="/PTopicRegDocs" component={PTopicRegDocs} />
          
          
          {/* Student View */}
          <Route path="/SubTemplates" component={SubTemplates} />
          <Route path="/STopicRegDocs" component={STopicRegDocs} />
          <Route path="/UploadTRD" component={UploadTRD} />
          <Route path="/SFinalDocs" component={SFinalDocs} />
          <Route path="/UploadFinalDoc" component={UploadFinalDoc} />
          

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




































































//chathum
