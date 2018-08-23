import React, { Component, Fragment } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Exercises from './Exercises';
import './App.css';

export default class extends Component {
  render() {
    return(
      <Fragment>
        <Header />

        <Exercises />

        <Footer />
      </Fragment>
    )
  }
}
