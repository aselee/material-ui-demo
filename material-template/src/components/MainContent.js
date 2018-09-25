import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Markdown from '../components/Markdown';
import post1 from './test1.md';



const styles = theme => ({
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
});

const posts = [post1];

function MainContent(props) {
  const { classes } = props;

  return(
    <Grid container spacing={40} className={classes.mainGrid}>
      {/* Main content */}
      <Grid item xs={12} md={8}>
        <Typography variant="title" gutterBottom>
          From the Firehose
        </Typography>
        <Divider />
        {posts.map(post => (
          <Markdown className={classes.markdown} key={post.substring(0, 40)}>
            {post}
          </Markdown>
        ))}
      </Grid>
    </Grid>
  )
};

export default withStyles(styles)(MainContent);