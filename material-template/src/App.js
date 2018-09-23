import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import CardPic from './components/CardPic';
import Footer from './components/Footer';


// Do I need const express? Check past projects
// const express = require("express");

// added image
// need to work on resizing image and card


function Template() {

    return (
      <React.Fragment>
        <CssBaseline />
        {/* Header section */}
          <Header/>
        {/* Pic of me and title */}
          <main>
            <CardPic/>
          </main>
        {/* Adding Footer */}
          <Footer/>
        {/* End of Footer */}
      </React.Fragment>
    );
};

export default Template;