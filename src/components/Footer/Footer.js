import React from 'react';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

const styles = {
  root: {
    backgroundColor: '#495962',
  },
  icon: {
    color: '#FFFFFF'
  }
};

const footer = (props) => {
  const { classes } = props;
  return (
    <BottomNavigation
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction className={classes.icon} label="Terms" icon={<RestoreIcon />} />
        <BottomNavigationAction className={classes.icon} label="Privacy" icon={<FavoriteIcon />} />
        <BottomNavigationAction className={classes.icon} label="Contacts" icon={<LocationOnIcon />} />
      </BottomNavigation>
  );
}

export default withStyles(styles)(footer);