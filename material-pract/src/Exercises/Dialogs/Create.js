import React, { Component, Fragment } from 'react';
import { Dialog, Button, TextField } from '@material-ui/core';
import { 
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
// import Icon from '@material-ui/core/Icon';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';


const styles = theme => ({
  FormControl: {
    width: 500
  }
})

export default withStyles(styles) (class extends Component {
  state = {
    open: false,
    exercise: {
      title: '',
      description: '',
      muscles: '',
    }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      exercise: {
      // reaching out to the state
      // to spread out all the properties
      // of the exercise
      ...this.state.exercise,
      [name]: value
      }
    })
  }

  handleSubmit = () => {
    // TODO: validate

    const { exercise } = this.state

    this.props.onCreate({
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
    const { open,exercise: { title, description, muscles} } = this.state,
          { classes, muscles: categories } = this.props

    return <Fragment>
    <Button variant="fab" onClick={this.handleToggle} mint>
      <SvgIcon />
    </Button>

    <Dialog
      open={open}
      onClose={this.handleToggle}
    >
    <DialogTitle id="form-dialog-title">
      Create a new Exercise
    </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill out the form below.
        </DialogContentText>
        <form>
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
        </form>
      </DialogContent>
        <DialogActions>
          <Button 
            color="primary" 
            variant="raised"
            onClick={this.handleSubmit}
            >
            Create Exercises
          </Button>
        </DialogActions>
    </Dialog>
  </Fragment>
  }
})