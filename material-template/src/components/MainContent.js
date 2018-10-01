import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
// import Markdown from '../mark/Markdown';
// import post from './BlogTest.md';



const styles = theme => ({
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
});

function MainContent(props) {
  const { classes } = props;


  return(
    <Grid container spacing={40} className={classes.mainGrid}>
    {/* Main content */}
      <Grid item xs={12} md={12}>
        <Typography variant="title" gutterBottom>
          Hi Welcome to my webpage
        </Typography>
        <Divider />
          {/* <Markdown 
          className={classes.markdown}>
            {post}
          </Markdown> */}
      </Grid>
    </Grid>
  )
};

MainContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainContent);

