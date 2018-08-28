import React, { Component, Fragment } from 'react';
import { Dialog, Button } from '@material-ui/core';
import { 
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
// import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

export default class extends Component {
  state = {
    open: false
  }

  handToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open } = this.state
    return <Fragment>
    <Button variant="fab" onClick={this.handleToggle} mint>
      <Icon />
    </Button>
    <Dialog
      open={open}
      onClose={this.handleClose}
      aria-labelledby="form-dialog-title"
    >
    <DialogTitle id="form-dialog-title">
      Create a new Exercise
    </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill out the form below.
        </DialogContentText>
      </DialogContent>
        <DialogActions>
          <Button color="primary">
            Create Exercises
          </Button>
        </DialogActions>
    </Dialog>
  </Fragment>
  }
}