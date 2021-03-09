import { useState } from "react";
// CSS
import "../../css/Theme.css";
import "../../css/Auth.css";
// React Boostrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
// Image(s) or SVG
import { ReactComponent as Student } from "../../content/svg/student.svg";
import { ReactComponent as Professor } from "../../content/svg/professor.svg";
import { ReactComponent as Company } from "../../content/svg/company.svg";

function Signup() {
  const [validated, setValidated] = useState(false);
  const [inputName, setInputName] = useState("School Name");
  const [email, setEmail] = useState("School Email");
  const [subtext, SetSubtext] = useState("Do you attend multiple schools?");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <h1 id='h1-signup'>Create An Account</h1>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className='auth-form'>
        <Form.Row id='profiles'>
          <Col>
            <label>
              <input
                type='radio'
                name='account'
                value='student'
                onClick={() => {
                  setInputName("School Name");
                  setEmail("Student Email");
                  SetSubtext("Do you attend multiple schools?");
                }}
              />
              <Student id='student-radio' fill='#EEEEEE' />
            </label>
          </Col>
          <Col>
            <label>
              <input
                type='radio'
                name='account'
                value='professor'
                onClick={() => {
                  setInputName("School Name");
                  setEmail("Work Email");
                  SetSubtext("Do you work at multiple schools?");
                }}
              />
              <Professor id='professor-radio' fill='#EEEEEE' />
            </label>
          </Col>
          <Col>
            <label>
              <input
                type='radio'
                name='account'
                value='company'
                onClick={() => {
                  setInputName("Company Name");
                  setEmail("Company Email");
                  SetSubtext("");
                }}
              />
              <Company id='company-radio' fill='#EEEEEE' />
            </label>
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md='6'>
            <Form.Control
              required
              type='text'
              id='first-name'
              placeholder='First Name'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md='6'>
            <Form.Control
              required
              type='text'
              id='last-name'
              placeholder='Last Name'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md='12'>
            <Form.Control
              type='text'
              id='organization-name'
              placeholder={inputName}
              required
            />
            <Form.Text className='text-muted'>{subtext}</Form.Text>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md='12'>
            <Form.Control
              type='email'
              id='email'
              placeholder={email}
              required
            />
          </Form.Group>
          <Form.Group as={Col} md='6'>
            <Form.Control
              type='password'
              id='password'
              placeholder='Password'
              required
            />
            <Form.Text className='text-muted'>
              Must be 8-20 characters long.
            </Form.Text>
            <Form.Control.Feedback type='invalid'>
              Password is weak
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md='6'>
            <Form.Control
              type='password'
              id='confirm-password'
              placeholder='Confim Password'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Password does not match.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label='I Agree to the  Privacy Policy, Terms & Conditions, and Cookie Policy'
            feedback='You must agree before submitting.'
            className='subtext'
          />
        </Form.Group>
        <Button variant='dark' type='submit'>
          Create Account
        </Button>
      </Form>
    </>
  );
}

export default Signup;
