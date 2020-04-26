import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
import Header from './Header';
import Footer from './Footer';

import '../styles/components/MainLayout.styl';
 
const Layout = ({children, ...rest}) => {  
  return (  
    <div className="page page-dashboard">  
      <Header />
      {children}
      
      <Footer />  
    </div>  
  )  
}  
  
const LayoutRoute = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={matchProps => (  
      <Layout>  
          <Component {...matchProps} />  
      </Layout>  
    )} />  
  )  
};  
  
export default LayoutRoute;