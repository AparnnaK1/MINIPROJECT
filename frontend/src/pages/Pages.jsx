import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../common/header/header';
import Home from '../pages/Home';
import Footer from '../common/footer/footer';
import Register from './Register';
import Login from './Login';
import Services from '../services/services';
import About from './About'; 
import Contact from './Contact'; 

const Pages = () => {
  return (
    <>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </>
  );
};

export default Pages;
