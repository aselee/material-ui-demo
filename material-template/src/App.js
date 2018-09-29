import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
// import MainContent from './components/MainContent';
import Pic from './codebrain.jpg';


// unable to find test1.md in main content




// Do I need const express? Check past projects
// const express = require("express");

// added image
// need to work on resizing image and card


class Template extends React.Component {
  render () {
    return (
      <React.Fragment>
        <CssBaseline />
        {/* Header section */}
          <Header/>
        {/* Pic of me and title */}
          <main>
            <div>
              <img src={Pic}/>
            </div>
            <Intro/>
            
            {/* <MainContent/> */}
          </main>
        {/* Adding Footer */}
          <Footer/>
        {/* End of Footer */}
      </React.Fragment>
    );
  };
};

export default Template;