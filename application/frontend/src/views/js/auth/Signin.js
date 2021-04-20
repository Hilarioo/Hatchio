import { useHistory } from "react-router-dom";
// CSS
import "../../css/Theme.css";
import "../../css/Auth.css";
// React Boostrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
//API
import API_USER_LOG_IN from "../../../models/user_sign_in";

function Signin() {
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Boolean if User Exists | Incorrect authentication field
    let bool_user_auth = await API_USER_LOG_IN(
      event.target[1].value,
      event.target[2].value,
      event.target[0].value
    );
    //Auth True
    if (bool_user_auth === true) {
      //auth true
      history.push("/dashboard");
      window.location.reload();
      console.log("THE BOOL OF USER: " + bool_user_auth);
    }
    //Auth False
    if (bool_user_auth === false) {
      //Control UI response
    }
  };

  return (
    <>
      <h1>Welcome Back!</h1>
      <Form className='auth-form' onSubmit={handleSubmit}>
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text id='basic-addon1'>
              Select User Type{" "}
            </InputGroup.Text>
          </InputGroup.Prepend>

          <Form.Control
            name='student_year'
            as='select'
            className='mr-sm-2'
            id='inlineFormCustomSelect'
            custom>
            <option value='select'>Select</option>
            <option value='professor'>Professor</option>
            <option value='employer'>Employer</option>
            <option value='student'>Student</option>
          </Form.Control>
        </InputGroup>
        <Form.Control type='email' placeholder='Email' required />
        <Form.Group id='passwd'>
          <Form.Control type='password' placeholder='Password' required />
          <Form.Text className='text-muted'>Forgot Password?</Form.Text>
        </Form.Group>
        <Button variant='dark' type='submit'>
          Sign in
        </Button>
      </Form>
    </>
  );
}

export default Signin;
