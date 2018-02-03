import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 650,
  },
  media: {
    height: 380,
  },
};

const newsbox = (props) => {
  const { classes, picture, title, summary, button } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={picture}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2" align="left">
            {title}
          </Typography>
          <Typography component="p" align="left">
            {summary}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            {button}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(newsbox);