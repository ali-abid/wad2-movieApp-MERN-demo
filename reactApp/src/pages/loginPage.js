import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import { MoviesContext } from '../contexts/moviesContext'; //ADD THIS:import moviesContext 
import { makeStyles } from "@material-ui/core/styles";



const LoginPage = props => {
  const context = useContext(AuthContext)
  const moviesContext = useContext(MoviesContext)  //ADD THIS: create moviesContext constant
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const login = () => {
    console.log("call login authenticate");
    context.authenticate(email, password);

  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };
  
  if (context.isAuthenticated === true) {
    console.log(`Is authentication granted? ${context.isAuthenticated}`);
    console.log(`Redirect to ${from}`);
    moviesContext.setAuthenticated(context.isAuthenticated)  //ADD THIS: set the authenticated to true in movies context. Will result in movie data request.
    return <Redirect to={from} />;


  }

  return (
    <>
      <br /> <br />
      <center>
        <h1>You must log in to view the protected pages </h1>
        <input id="email" placeholder="email" onChange={e => {
          setEmail(e.target.value);
        }}></input><br />
        <input id="password" type="password" placeholder="password" onChange={e => {
          setPassword(e.target.value);
        }}></input><br />
        <br />
        <button onClick={login}>Log in</button>
        <p>Not Registered?
          <Link to="/signup">Sign Up!</Link></p>
      </center>
    </>
  );
};

export default LoginPage;