import { useState } from "react";
// React Boostrap
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";

const VPHome = () => {
  return (
    <div>
      {/* test home page containing class, section, team identification */}
      <h3 style={{ textAlign: "center" }}>
        SW Engineering CSC648/848 Spring 2021
      </h3>
      <h4 style={{ textAlign: "center", marginBottom: "50px" }}>
        Section 02 | Team 03
      </h4>

      {/* one free text entry field */}
      <Form id='search-jobs'>
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text id='basic-addon1'>Find</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            placeholder='Major, GPA, or Keywords'
            aria-label='text'
            aria-describedby='basic-addon1'
          />
        </InputGroup>
        <Button variant='dark' type='submit'>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default VPHome;
