import React from 'react';
import { Paper, Typography, Input, withStyles } from 'material-ui';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 50,
    paddingBottom: 20,
  }),
});

const fronthero = (props) => {
  const { classes } = props;
  return (
    <Paper className={classes.root} elevation={2}>
      <Typography type="headline" component="h1" align="center" color="textSecondary">
        Build <b>anything</b> with EcoSphere
      </Typography>
      <Typography className={classes.root} align="center">
        <Input
        fullWidth={false}
        inputProps={{
          'aria-label': 'Search',
        }} />
      </Typography>
    </Paper>
  )
}

export default withStyles(styles)(fronthero);