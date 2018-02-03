import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, MenuItem, Typography, Button, withStyles, Tabs, Tab } from 'material-ui';
import { MenuIcon, AccountCircle } from 'material-ui-icons';
import { withRouter } from 'react-router-dom';

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

const appbar = (props) => {
  const { classes, auth } = props;
  return (
    <AppBar position="static" color={auth.isAuthenticated === true ? "default" : "inherit"}>
      <Toolbar>
          {props.logo &&
             <img src={props.logo} alt={props.alt} width={props.width} height={props.height} />
          }
          <Typography type="title" align="left" color="inherit" className={classes.flex}>
            <Tabs
              indicatorColor="primary"
              textColor="inherit"
            >
              {
                props.elements.map((element) => (
                  <Tab label={element.name} href={element.url} key={element.name} />
                ))
              }
            </Tabs>
          </Typography>
          { auth.isAuthenticated === true ? [
            <IconButton
                  aria-haspopup="true"
                  color="inherit"
                  onClick={auth.logout}
                >
                  <AccountCircle />
            </IconButton> ] : [
              <Button color="inherit" key="login" onClick={auth.login}>Login</Button>
          ]}
        </Toolbar>
    </AppBar>
  );
}

appbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(appbar);

