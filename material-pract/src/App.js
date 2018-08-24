import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
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
