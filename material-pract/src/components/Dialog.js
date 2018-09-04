import React, { Component, Fragment } from 'react';
import { Dialog, Button, TextField } from '@material-ui/core';
import { 
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
// import FormControl from '@material-ui/core/FormControl'
// import InputLabel from '@material-ui/core/Input';
// import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Form from './components/Form';
// import { withStyles } from '@material-ui/core/styles';
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

export default class extends Component {
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


  render() {
    const { open,exercise: { title, description, muscles} } = this.state

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
        <Form/>
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
}