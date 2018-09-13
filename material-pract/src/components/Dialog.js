import React, { Component, Fragment } from 'react';
import { Dialog, Button } from '@material-ui/core';
import { 
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import Add from '@material-ui/core/SvgIcon';
import Form from '../components/Form';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  FormControl: {
    width: 500
  }
});

export default class extends Component {
  state = {
    open: false,
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }


  render() {
    const { open } = this.state,
          { muscles, onCreate } = this.props

    return <Fragment>
    <Button variant="fab" onClick={this.handleToggle} mini>
      <Add />
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
        <Form
          muscles={muscles}
          onSubmit={onCreate}
        />
      </DialogContent>
    </Dialog>
  </Fragment>
  }
}