import "../../css/Forms.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// POPUP List will be used to add benefits (for comapany), qualities (for students)
const List = (props) => {
  // Submits the 'qualities' or 'benefits' to the DB
  const handleSubmit = (e) => {
    e.preventDefault();
    const formCount = 10;
    let str;
    // iterates throught the list input
    for (let i = 1; i <= formCount; i++) {
      try {
        // combines all qualities into string for DB storing
        if (e.target[i].value.localeCompare("")) str += i + e.target[i].value;
      } catch (e) {
        console.log(e);
      }
    }
    //removes the first 'undefined' (tmp fix)
    let allQualities = str.replace("undefined", "");
    console.log(allQualities);
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
            Add Benefits / Strengths
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol>
            <li>
              <Form.Group>
                <Form.Control type='text' />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control type='text' />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control type='text' />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control type='text' />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control type='text' />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control type='text' />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control type='text' />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control type='text' />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control type='text' />
              </Form.Group>
            </li>
            <li>
              <Form.Group>
                <Form.Control type='text' />
              </Form.Group>
            </li>
          </ol>
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

export default List;
