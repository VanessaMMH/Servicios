import React from 'react';  
import { Route } from 'react-router-dom';  
import Header from './Header';
import Footer from './Footer';

import '../styles/components/MainLayout.styl';
 
const Layout = ({children}) => {  
  return (  
    <>  
      <Header />
      {children}     
      <Footer />  
    </>  
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