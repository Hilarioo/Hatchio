// CSS
import "../../css/Theme.css";
import "../../css/Search.css";
// React Boostrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import StudentCard from "./StudentCard";

const StudentSearch = () => {
  return (
    <>
      <div class='grid-container'>
        <div class='item1'>
          <h3>Browse Students</h3>
          <Form id='search-jobs'>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <InputGroup.Text id='basic-addon1'>Find</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                placeholder='Student Name, GPA, Degree, or Keywords'
                aria-label='text'
                aria-describedby='basic-addon1'
              />
            </InputGroup>
            <Button variant='dark' type='submit'>
              Search
            </Button>
          </Form>
        </div>
        <div class='item2'>
          <h3>Filter(s)</h3>
          <Form id='filter-students'>
            <Form.Group>
              <Form.Label>School Year</Form.Label>
              <Form.Check type='checkbox' label='Freshman' />
              <Form.Check type='checkbox' label='Sophomore' />
              <Form.Check type='checkbox' label='Junior' />
              <Form.Check type='checkbox' label='Senior' />
              <Form.Check type='checkbox' label='Masters' />
              <Form.Check type='checkbox' label='Doctorate' />
              <Form.Check type='checkbox' label='Alumni' />
            </Form.Group>
            <Form.Group>
              <Form.Label>Academics</Form.Label>
              <InputGroup>
                <Form.Control
                  placeholder='Add Major / Program'
                  aria-label="Recipient's username"
                  aria-describedby='basic-addon2'
                />
                <InputGroup.Append>
                  <Button variant='outline-secondary' className='btn-fill'>
                    +
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label>Strengths / Skills</Form.Label>
              <InputGroup>
                <Form.Control
                  placeholder='Add Strengths / Skills'
                  aria-label="Recipient's username"
                  aria-describedby='basic-addon2'
                />
                <InputGroup.Append>
                  <Button variant='outline-secondary' className='btn-fill'>
                    +
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label>GPA</Form.Label>
              <InputGroup className='mb-3'>
                <Form.Control
                  placeholder='From'
                  aria-label='GPA-from'
                  aria-describedby='basic-addon1'
                />
                <Form.Control
                  placeholder='To'
                  aria-label='GPA-to'
                  aria-describedby='basic-addon1'
                />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label>Review Score</Form.Label>
              <InputGroup className='mb-3'>
                <Form.Control
                  placeholder='From'
                  aria-label='Review-from'
                  aria-describedby='basic-addon1'
                />
                <Form.Control
                  placeholder='To'
                  aria-label='Review-to'
                  aria-describedby='basic-addon1'
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </div>
        <div class='item3'>
          <h3>Results</h3>
          <StudentCard />
        </div>
      </div>
    </>
  );
};

export default StudentSearch;
