import React, { Component } from 'react';  
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  
import Home from '../containers/Home';
import MainLayout from '../components/MainLayout';
import Layout from '../components/Layout';
import Login from '../containers/Login';

class App extends Component {  
  render() {  
    return (  
      <Router>  
        <Switch>  
          <Route exact path="/">  
            <Redirect to="/home" />  
          </Route>  
          <MainLayout path="/home" component={Home} />  
          < Layout path="/solicita" component={Login} />  
        </Switch>  
      </Router>  
    );  
  }  
}  
  
export default App; 






