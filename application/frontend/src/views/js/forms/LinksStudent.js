import "../../css/Forms.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LinksStudent = (props) => {
  // saves website, linkedin, and github URL links
  const [links, setLinks] = useState({ website: "", linkedin: "", github: "" });

  // Submits the Student Links to the DB
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(links);
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
            Add Links
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* website */}
          <Form.Group>
            <Form.Label>Website</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Personal Website URL'
              onChange={(e) => setLinks({ ...links, website: e.target.value })}
            />
          </Form.Group>
          {/* linkedin */}
          <Form.Group>
            <Form.Label>Linkedin</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Linkedin URL'
              onChange={(e) => setLinks({ ...links, linkedin: e.target.value })}
            />
          </Form.Group>
          {/* github */}
          <Form.Group>
            <Form.Label>Github</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Github URL'
              onChange={(e) => setLinks({ ...links, github: e.target.value })}
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

export default LinksStudent;
