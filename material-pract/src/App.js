import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Exercises from './Exercises';
import { muscles, exercises } from './store.js'
import './App.css';


// Current progress: 10:09, adding icons, having issue
// https://www.youtube.com/watch?v=v_A0wJDV5AU


export default class extends Component {
  state = {
    exercises,
    exercise: {}
    
  }

  // method
  getExercisesByMuscles() {
    // reducing the state, expecting a callback from the first parameter
    // second parameter, the object being looped over in store.js

     // using Object.entries method 
    return Object.entries(
      // to return an array of the given object property
      // [keys, value] pairs
      this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise

      // assigning a property, 'muscles', to the object, exercises
      // checking to see if the information is stored in the property
      exercises[muscles] = exercises[muscles]
      
      // spread out the elements into a new array
        ? [...exercises[muscles], exercise]
        : [exercise]
        
        //returning the exercises
      return exercises
    }, {})
  )
    // should return a object,
    // containing the keys (exercises)
}

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state

    // console.log(this.getExercisesByMuscles())
    return(
      <Fragment>
        <Header 
          muscles={muscles}
        />

        <Exercises 
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
        />

        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
          />
      </Fragment>
    )
  }
}
