import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/NavBar/navbar";
import Home from "./components/HomePage/Home"
import Login from "./components/Auth/Login"
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
     </Routes>
   </div>
 );
};
 
export default App;