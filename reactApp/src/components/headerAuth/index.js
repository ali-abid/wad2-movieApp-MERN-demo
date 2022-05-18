import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from '../../contexts/authContext';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    marginTop: theme.spacing(8),
    top: theme.spacing(0),
    right: theme.spacing(0),
    width: 130,
    height: 60,
    fontSize: 15,
},
}));

const BaseAuthHeader = (props) => {
  const classes = useStyles();
  const context = useContext(AuthContext);
  const { history } = props;

  return (
    <>
      <AppBar className={classes.AppBar}
        position="fixed" elevation={0} color='primary'>
        <Toolbar>
          {context.isAuthenticated ? (
            <>
              <p>
                Welcome {context.email}! <button onClick={() => context.signout()}>Logout</button>
              </p>
            </>
          ) : (
            <>
              <p>
                You are not logged in{" "}
                <button variant="contained" onClick={() => history.push("/login")}>Login</button>
              </p>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withRouter(BaseAuthHeader);