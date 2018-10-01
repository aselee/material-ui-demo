import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: red[500],
    textAlign: 'center',
    // backgroundColor: theme.palette.grey[200],
  }, 
});


function Intro(props) {
  const { classes } = props;

  return(
    <body>
      <Grid item xs={12}>
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