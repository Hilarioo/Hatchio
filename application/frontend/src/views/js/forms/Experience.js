import "../../css/Forms.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Experience = (props) => {
  // saves role, employement type, tools used, company, location, start year, and end year
  const [experience, setExperience] = useState({
    position: "",
    employementType: "fulltime",
    description: "",
    company: "",
    location: "",
    startYear: "",
    endYear: "",
  });

  // Submits the Student Experience to the DB
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(experience);
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
            Add Experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Role / Position */}
          <Form.Group>
            <Form.Label>Role / Position</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setExperience({ ...experience, position: e.target.value })
              }
            />
          </Form.Group>

          {/* Employment Type */}
          <Form.Group>
            <Form.Label>Employement Type</Form.Label>
            <Form.Control
              as='select'
              onChange={(e) =>
                setExperience({
                  ...experience,
                  employementType: e.target.value,
                })
              }>
              <option name='fulltime'>Full Time</option>
              <option name='parttime'>Part Time</option>
              <option name='internship'>Internship</option>
              <option name='contract'>Contract</option>
              <option name='remote'>Remote</option>
            </Form.Control>
          </Form.Group>

          {/* Description */}
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              as='textarea'
              onChange={(e) =>
                setExperience({ ...experience, description: e.target.value })
              }
            />
          </Form.Group>

          {/* Company */}
          <Form.Group>
            <Form.Label>Company</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setExperience({ ...experience, company: e.target.value })
              }
            />
          </Form.Group>

          {/* Location */}
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setExperience({ ...experience, location: e.target.value })
              }
            />
          </Form.Group>

          {/* Start Year */}
          <Form.Group>
            <Form.Label>Start Year</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setExperience({ ...experience, startYear: e.target.value })
              }
            />
          </Form.Group>

          {/* End Year */}
          <Form.Group>
            <Form.Label>End Year</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setExperience({ ...experience, endYear: e.target.value })
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

export default Experience;
