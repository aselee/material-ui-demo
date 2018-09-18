import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';

// Do I need const express? Check past projects
// const express = require("express");


// trying to see if we can add image in the card.
// work on  that next.

const styles = theme => ({
  layout: {
    width: 'auto', 
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
});

const sections = [
  'About',
  'Projects',
  'Social',
  'Contact'
];

function Template(props) {
  const { classes } = props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Toolbar className={classes.toolbarMain}>
            <Button size="small">Button1</Button>
            <Typography
              variant="headline"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
              Webportfolio Template
            </Typography>
            <Button variant="outlined" size="small">
              Button2
            </Button>
          </Toolbar>
          <Toolbar variant="dense" className={classes.toolbarSecondary}>
            {sections.map(section => (
              <Typography color="inherit" noWrap key={section}>
                {section}
              </Typography>
            ))}
          </Toolbar>
          <main>
            {/* Pic of me and title */}
            <Card className={classes.mainFeaturedPost}>
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturedPostContent}>
                    <Typography variant="display2" color="inherit" gutterBottom>
                      title of something here
                    </Typography>
                    <Typography variant="headline" color="inherit" paragraph>
                      Multiple of lines text here probably wont use this? 
                      Not really sure but adding it for testing.
                    </Typography>
                    <Typography variant="title" color="inherit">
                      continue reading this...
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Card>
          </main>
            
        </div>
      </React.Fragment>
    )
};

export default withStyles(styles)(Template);