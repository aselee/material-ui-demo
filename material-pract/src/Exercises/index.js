import React from 'react';
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 20 } 
}

export default props => 
  <Grid container>
    <Grid item sm>
      <LeftPane styles={styles}/>
    </Grid>
    <Grid item sm>
      <RightPane styles={styles}/>
    </Grid>
  </Grid>


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
	
