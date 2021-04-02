import "../../css/Forms.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Education = (props) => {
  // saves school name, degree, gpa, start year, end year
  const [education, setEducation] = useState({
    schoolName: "",
    degree: "",
    gpa: "",
    startYear: "",
    endYear: "",
  });

  // Submits the Student Education to the DB
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(education);
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Add education
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* School Names */}
          <Form.Group>
            <Form.Label>School</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setEducation({ ...education, schoolName: e.target.value })
              }
            />
          </Form.Group>
          {/* Degree */}
          <Form.Group>
            <Form.Label>Degree</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setEducation({ ...education, degree: e.target.value })
              }
            />
          </Form.Group>
          {/* GPA */}
          <Form.Group>
            <Form.Label>GPA</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setEducation({ ...education, gpa: e.target.value })
              }
            />
          </Form.Group>
          {/* Start Year */}
          <Form.Group>
            <Form.Label>Start Year</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setEducation({ ...education, startYear: e.target.value })
              }
            />
          </Form.Group>
          {/* End Year */}
          <Form.Group>
            <Form.Label>End Year</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setEducation({ ...education, endYear: e.target.value })
              }
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit'>Save</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Education;
