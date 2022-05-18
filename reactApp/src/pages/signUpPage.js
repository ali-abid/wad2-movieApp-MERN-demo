import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';


const useStyles = makeStyles({
  form: {
    margin: 20,
    padding: 20,
    width: 300,
    fontSize: 20
  }
});

const SignupPage = props => {
  const classes = useStyles();
  const context = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  // Submit function (Create account)
  const handleSubmit = () => {
    if (password.length > 0 && password === passwordAgain) {
      console.log("reg")
      context.register(email, password, firstName, lastName);
      setRegistered(true);
      
    }
  }

  const { from } = props.location.state || { from: { pathname: "/" } };

  if (registered === true) {
    return <Redirect to="./login" />;
  }


  return (
    <>      
    <br/><br/>
      <center>
      <br/><br/>
        <h1> Welcome to Web Development App 2 </h1>
        <h2> Sign Up </h2>
        <form onSubmit={handleSubmit}>
          <input value={email} placeholder="email" onChange={e => {
            setEmail(e.target.value);
          }} className={classes.form} /><br />
          <input value={firstName} placeholder="first name" onChange={e => {
            setFirstName(e.target.value);
          }} className={classes.form} /><br />
          <input value={lastName} placeholder="last name" onChange={e => {
            setLastName(e.target.value);
          }} className={classes.form} /><br />
          <input type="password" value={password} placeholder="password" onChange={e => {
            setPassword(e.target.value);
          }} className={classes.form} /><br />
          <input type="password" value={passwordAgain} placeholder="password again" onChange={e => {
            setPasswordAgain(e.target.value);
          }} className={classes.form} /><br />
          <button type="submit" className={classes.form}>Sign Up</button>
          <button type="reset" className={classes.form}>Reset</button>
        </form>
      </center>
    </>
  )
};

export default SignupPage;