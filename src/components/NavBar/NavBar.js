import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, MenuItem, Typography, Button, withStyles, Tabs, Tab } from 'material-ui';
import { MenuIcon, AccountCircle } from 'material-ui-icons';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    'margin-left': '30px',
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const loginHandler = () => {
  
}

const appbar = (props) => {
  const { classes } = props;
  return (
    <AppBar position="satic" color={props.isAuthenticated === true ? "primary" : "inherit"}>
      <Toolbar>
          {props.logo &&
             <img src={props.logo} alt={props.alt} width={props.width} height={props.width} />
          }
          <Typography type="title" align="left" color="inherit" className={classes.flex}>
            <Tabs
              indicatorColor="primary"
              textColor="inherit"
            >
              {
                props.elements.map((element) => (
                  <Tab label={element.name} href={element.url}/>
                ))
              }
            </Tabs>
          </Typography>
          { props.isAuthenticated === true ? [
            <IconButton
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
            </IconButton> ] : [
              <Button color="inherit">Login</Button>
          ]}
        </Toolbar>
    </AppBar>
  );
}

appbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(appbar);

