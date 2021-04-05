import { useState } from "react";
// CSS
import "../../css/Theme.css";
import "../../css/Auth.css";
// React Boostrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { port_host } from "../../../config.js";

function Signin() {

const [email, setEmail] = useState(""); //Email
const [password, setPassword] = useState(""); //Password

var db,db2,flag = false;

const api_login = () => {
  if(flag){
    fetch(`${port_host}/userloginpwd?email=${email}`)
    .then((response) => response.json())
    .then((json) => {
      db2 = json;
      console.log(json);
    });
  }
  fetch(`${port_host}/userlogin?email=${email}`)      
  .then((response) => response.json())
  .then((json) => {
    db = json;
    console.log(json);
  });
};

const handleSubmit = (event) => {
  api_login();
  if(db == 1){
    flag = true;
    api_login();
    if((db2 == password)&&(flag)){
      window.location.replace("http://localhost:3000/dashboard");
    }

  }
  event.preventDefault();
  event.stopPropagation();
};

  return (
    <>
      <h1>Welcome Back!</h1>
      <Form className="auth-form" onSubmit={handleSubmit}>
        <Form.Control type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} required/>
        <Form.Group id="passwd">
          <Form.Control type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} required/>
          <Form.Text className="text-muted">Forgot Password?</Form.Text>
        </Form.Group>
        <Button variant="dark" type="submit">
          Sign in
        </Button>
      </Form>
    </>
  );
};

export default Signin;
