import React from 'react';
import { 
  AppBar, 
  Toolbar,
  Typography
} from '@material-ui/core';
import CreateDialog from '../Exercises/Dialogs/Create';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';


export default ({ muscles }) =>
<AppBar position="static">
  <Toolbar>
  <Typography variant="headline" color="inherit" style={{flex: 1}}>
        Exercise Database
  </Typography>
  <CreateDialog muscles={muscles}/> 
  </Toolbar>
</AppBar>