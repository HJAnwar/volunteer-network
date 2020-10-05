import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Register from './Component/Register/Register';
import Admin from './Component/Admin/Admin';
import Donetion from './Component/Donetion/Donetion';
import Events from './Component/Events/Events';
import Blog from './Component/Blog/Blog';
import AddEvent from './Component/AddminAdd/AddEvent';


export const UserContext= createContext();

function App() {
  const [loggedInUser, setLoggedInUser]=useState({});
  return (
  <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
        <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/admin'>
          <Admin></Admin>
        </Route>
        <Route path='/addevent'>
         <AddEvent></AddEvent>
        </Route>
        <Route path='/donetion'>
          <Donetion></Donetion>
        </Route>
        <Route path='/events'>
          <Events></Events>
        </Route>
        <Route path='/blog'>
          <Blog></Blog>
        </Route>
        <PrivateRoute path='/register'>
          <Register></Register>
        </PrivateRoute>
        <Route path='/blog'>
          
        </Route>
        <Route exate  path='/'>
          <Home></Home>
        </Route>
        <Route  path='*'>
          <NotFound></NotFound>
        </Route>
        
      </Switch>
    </Router>
   </UserContext.Provider>
  );
}

export default App;
