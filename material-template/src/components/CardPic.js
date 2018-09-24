import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Pic from '../codebrain.jpg';
import { withStyles } from '@material-ui/core/styles';


// export default class CardPic extends Component {

const styles = theme => ({
  card: {
    display: 'flex',
  },
});

function CardPic(props) {

  const { classes } = props;

  return(
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
  )
};

export default withStyles(styles)(CardPic);