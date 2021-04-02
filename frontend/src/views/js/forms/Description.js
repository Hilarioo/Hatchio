import "../../css/Forms.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Description = (props) => {
  // Submits the 'About' or 'Why us' to the DB
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[1].value);
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
            Add About / Why Us
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control type='text' as='textarea' />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' variant='primary'>
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Description;
