import React, { Fragment } from 'react';
import { 
  Grid, 
  Paper, 
  Typography, 
  List,
  IconButton
} from '@material-ui/core';
// import { 
//   ListItem, 
//   ListItemText, 
//   ListItemSecondaryAction 
// } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Delete from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';
// import LeftPane from './LeftPane';
// import RightPane from './RightPane';
// import Grid from '@material-ui/core/Grid';

const styles = {
  Paper: { 
    padding: 20, 
    marginTop: 10, 
    marginBottom: 10,
    height: 500,
    overflowY: 'auto',
  } 
}

export default ({
  exercises, 
  category, 
  onSelect, 
  exercise: { 
    id, 
    title = 'Welcomee!',
    description = 'Please select an exercise from the list on the left!' 
  },
  onDelete
}) => 
  <Grid container>
    <Grid item sm>
      <Paper styles={styles.Paper}>
        {exercises.map(([group, exercises]) => 
          // if the category is falsey, display the list
          // OR if the category actually equals the loop (group)
          ! category || category === group 
            ? <Fragment key={group}>
                <Typography
                  variant="headline"
                  style={{textTransform: 'capitalize'}}
                >
              {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) =>
                    <ListItem
                      key={id}
                      button
                      onClick={() => onSelect(id)}
                    >
                      <ListItemText primary={title}/>
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onDelete(id)}>
                          <Delete/>
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )}
                </List>
              </Fragment>  
            // if the conditions yields false, null
              : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper styles={styles.Paper}>
        <Typography
          variant="display1"
        >
        {title}
        </Typography>
        <Typography
          variant="subheading"
          style={{marginTop: 20}}
        >
         {description} 
        </Typography>
      </Paper>
    </Grid>
  </Grid>
  



// Notes

// what code was previously before removing
// LeftPane and RightPane files

// export default props => 
//   <Grid container>
//     <Grid item sm>
//       <LeftPane styles={styles}/>
//     </Grid>
//     <Grid item sm>
//       <RightPane styles={styles}/>
//     </Grid>
//   </Grid>


// what the code was before creating separate files

// export default props => 
//   <Grid container>
//     <Grid item sm={6}>
//       <Paper style={style.Paper}>
//         Left Pane
//       </Paper>
//     </Grid>
//     <Grid item sm>
//       <Paper style={style.Paper}>
//         Right Pane
//       </Paper>
//     </Grid>
//   </Grid>
	
