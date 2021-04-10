import { useState } from "react";
// CSS
import "../../css/Theme.css";
import "../../css/Auth.css";
// React Boostrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
//API
import API_USER_LOG_IN from "../../../models/user_sign_in";
//Cookie
import { useCookies } from "react-cookie";

function Signin() {
  const [email, setEmail] = useState(""); //Email
  const [password, setPassword] = useState(""); //Password
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]);

  const handleSubmit = (event) => {
    //event.preventDefault();
    API_USER_LOG_IN(email, password, event.target[0].value);
    //event.stopPropagation();
  };

  return (
    <>
      <h1>Welcome Back!</h1>
      <Form className="auth-form" onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
              Select User Type{" "}
            </InputGroup.Text>
          </InputGroup.Prepend>

          <Form.Control
            name="student_year"
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            custom
          >
            <option value="select">Select</option>
            <option value="professor">Professor</option>
            <option value="employer">Employer</option>
            <option value="student">Student</option>
          </Form.Control>
        </InputGroup>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Group id="passwd">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Form.Text className="text-muted">Forgot Password?</Form.Text>
        </Form.Group>
        <Button variant="dark" type="submit">
          Sign in
        </Button>
      </Form>
      <p>Type User: {cookie.Type_User}</p>
      <p>User ID: {cookie.ID_OF_USER}</p>
      <p>First Name {cookie.First_Name}</p>
    </>
  );
}

export default Signin;
