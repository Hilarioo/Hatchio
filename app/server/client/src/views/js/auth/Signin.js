// CSS
import "../../css/Theme.css";
import "../../css/Auth.css";
// React Boostrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Signin = () => {
  return (
    <>
      <h1>Welcome Back!</h1>
      <Form className='auth-form'>
        <Form.Control type='email' placeholder='Email' />
        <Form.Group id='passwd'>
          <Form.Control type='password' placeholder='Password' />
          <Form.Text className='text-muted'>Forgot Password?</Form.Text>
        </Form.Group>
        <Button variant='dark' type='submit'>
          Sign in
        </Button>
      </Form>
    </>
  );
};

export default Signin;
