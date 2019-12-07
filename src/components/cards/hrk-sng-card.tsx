import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import hrksng from './../../static/images/hrksng-mm.png'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={hrksng}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            新宮 広輝 (シングウ ヒロキ)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            RADWIMPS をこよなく愛す男。暇なときは、ブラブラ散歩するか読書をする。
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
