import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  button: {
    margin: theme.spacing.unit,
    width: 500,
  },
});

const sections = [
  'About',
  'Projects',
  'Contact'
];

function Header(props) {
  const { classes } = props;
  
  return (
    <div className={classes.layout}>
      <Toolbar className={classes.toolbarMain}>
        <Button size="small">
          Button1
        </Button>
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
      {/* Section; need to create buttons */}
      <Toolbar variant="dense" className={classes.toolbarSecondary}>
        {sections.map(section => (
          <Button size="small" className={classes.button}>
          <Typography color="inherit" noWrap key={section}>
            {section}
          </Typography>
          </Button>
        ))}
      </Toolbar>
    </div>
  )
};

export default withStyles(styles)(Header);