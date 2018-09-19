import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Pic from './codebrain.jpg';


// Do I need const express? Check past projects
// const express = require("express");


// trying to see if we can add image in the card.
// work on  that next.
// issue with git?

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
    borderBottom: `1px solid ${theme.palette.grey[500]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  footer: {
    backgroundColor: theme.palette.background.paper, // can add colors
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
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
            <Card className={classes.card}>
              <CardActionArea>
              <img src={Pic}/>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    Lizard
                  </Typography>
                  <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </main>
        </div>
        {/* Adding Footer */}
        <footer className={classes.footer}>
          <Typography variant="title" align="center" gutterBottom>
              Footer here
          </Typography>
          <Typography variant="subheading" align="center" color="textSecondary" component="p">
          </Typography>
        </footer>
        {/* End of Footer */}
      </React.Fragment>
    );
};

export default withStyles(styles)(Template);