import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Exercises from './Exercises';
import { muscles, exercises } from './store.js'
import './App.css';

export default class extends Component {
  state = {
    exercises
  }

  // method
  getExercisesByMuscles() {
    return this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise

      exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], exercise]
        : [exercise]
      return exercises
    }, {})
  }

  render() {
    console.log(this.getExercisesByMuscles())
    return(
      <Fragment>
        <Header />

        <Exercises 

        />

        <Footer
          muscles={muscles} />
      </Fragment>
    )
  }
}
