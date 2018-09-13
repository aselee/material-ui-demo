import React, { Component } from 'react';
import {
  TextField,
  Select,
  Button,
  Dialog
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  FormControl: {
    width: 200
  }
})


export default withStyles(styles) (class extends Component {
  state = this.getInitState()

  getInitState() {
    const { exercise } = this.props

    return exercise ? exercise : {
      title: '',
      description: '',
      muscles: ''
    }
  }


  handleChange = name => ({ target: { value } }) => 
    this.setState({
      // exercise: {
      // reaching out to the state
      // to spread out all the properties
      // of the exercise
      // ...this.state.exercise,
      [name]: value
      // }
    })
  

  handleSubmit = () => {
    // TODO: validate

    const { exercise } = this.state

    this.props.onSubmit({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
  })

    // clearing out the form,
    // when creating a new exercise.
    this.setState({
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    })
  }


  render() {
    const { title, description, muscles } = this.state,
          { classes, muscles: categories } = this.props

    return <form>
    <TextField
      label="Title"
      value={title}
      onChange={this.handleChange('title')}
      margin="normal"
      className={classes.FormControl}
    />
    <br/>
    <FormControl className={classes.FormControl}>
      <InputLabel htmlFor="muscles">
        muscles
      </InputLabel>
      <Select
        value={muscles}
        onChange={this.handleChange('muscles')}
      >
      {categories.map(category =>
        <MenuItem value={category}>
          {category}
        </MenuItem>
      )}
      </Select>
    </FormControl>
    <br/>
    <TextField
      multiline
      rows="4"
      label="Description"
      value={description}
      onChange={this.handleChange('description')}
      margin="normal"
      className={classes.FormControl}
    />
    <br />
    <Button 
      color="primary" 
      variant="raised"
      onClick={this.handleSubmit}
    >
      Create Exercises
    </Button>
  </form>
  }
})