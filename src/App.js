
import './App.css';
import Header from './Header';
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Footer from './Footer';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';

function App() {

  const [{},dispatch]=useStateValue();

  useEffect(() => {
    //it will only run once when app component loads....
    auth.onAuthStateChanged(authUser =>{
      console.log("the user is >>> ",authUser)

      if(authUser){
        //the user just login/ the user was logged in
       dispatch({
         type: "SET_USER",
         user:authUser
       })
      }else{
        //the user is logged out
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  }, [])

  return (
    //BEM convension
    <Router>
    <div className="app">
      <Switch>
      <Route path="/login">
        <Login/>    
        </Route>
      <Route path="/checkout">
      <Header/>
        <Checkout/>
        <Footer/>
        </Route>
        <Route path="/">
        <Header/>
        <Home/>
        <Footer/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
