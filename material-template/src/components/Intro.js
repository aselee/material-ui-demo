import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  
});


function Intro(props) {
  const { classes } = props;

  return(
    <body>
    <Grid item xs={6} md={6}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="title" gutterBottom>
          Hi
        </Typography>
        <Typography>
          Welcome to my webportfolio! Please take a look around! 
          
        </Typography>
      </Paper>
    </Grid>
  </body>
  )
};

Intro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Intro);