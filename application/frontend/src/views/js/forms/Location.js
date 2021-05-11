/*
 * File: Location.js
 * Functionality: Modal for Students, Profesosrs, & Companies to add or edit their Location
 * Author: Jose (Component & Structure) | Aaron (API)
 */
import { useState } from "react";
import "../../css/Forms.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//API
import API_STUDENT_UPDATE_LOCATION from "../../../models/PUT/Students/update_location";

const Location = (props) => {
  const [location, setLocation] = useState("");

  // Submits the 'qualities' or 'benefits' to the DB
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await API_STUDENT_UPDATE_LOCATION(props.userID, location);
    //Refresh if Update is Succesful
    if (response.status === 200) {
      window.location.reload();
    }
    if (response.status === 400) {
      alert("update location request failed");
    }
    // console.log("Submitted Location: " + location);
  };

  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type='text'
              defaultValue={props.location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' variant='dark'>
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Location;
