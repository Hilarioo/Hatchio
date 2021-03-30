import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { port_host } from "../../../config.js";

const StudentProfiles = () => {
  const [dbResultStudents, setdbResultStudents] = useState([]); //db student profiles
  //SetUp for Fetch
  const fetchStudents = () => {
    fetch(`${port_host}/studentpages`)
      .then((response) => response.json())
      .then((json) => setdbResultStudents(json));
    console.log(dbResultStudents);
  };

  //Submit Form
  const handleSubmit = (e) => {
    const formCount = 4;
    e.preventDefault();
    fetchStudents();
    for (var index = 0; index < 4; index++) {
      try {
        //Get User for which is getting Rated
        console.log(e.target[index].value); //Form Submission Results for DB Ratings Submission
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div>
      <h3>Professors Rate Students </h3>
      <h4>Function of Page</h4>
      <ul>
        <li>-Fetch Student Profiles</li>
        <li>-Expand a Student's Profile </li>
        <li>
          -Enter a form to rate a student as requirement states:Professors will be able to to <b>rate students</b> in a
          scale from 1-5 fashion,knoledgeable,responsible,teamwork,leadership,committed to success and enter
          recommendations "
        </li>
      </ul>
      {/* one free text entry field */}
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Recommendation </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            placeholder="String text with words that assess students in generic categories like his/her honesty,integrity,courage,skillset,etc."
            aria-label="text"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Responsible </InputGroup.Text>
          </InputGroup.Prepend>

          <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
            <option value="Select">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Control>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">TeamWork </InputGroup.Text>
          </InputGroup.Prepend>

          <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
            <option value="Select">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Control>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Leadership </InputGroup.Text>
          </InputGroup.Prepend>

          <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
            <option value="Select">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Control>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Committed to Success </InputGroup.Text>
          </InputGroup.Prepend>

          <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
            <option value="Select">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Control>
        </InputGroup>
        <Button variant="dark" type="submit">
          Rate Student
        </Button>
      </Form>
      {JSON.stringify(dbResultStudents)}
    </div>
  );
};
export default StudentProfiles;
