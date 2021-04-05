import { useState, useEffect } from "react";
// CSS
import "../../../css/Theme.css";
import "../../../css/Search.css";
// React Boostrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const StudentFilters = () => {
  // Active filters
  const [activeFilters, SetActiveFilters] = useState([]);

  // Updates active filters
  const addFilterHandler = (e) => {
    console.log("checked: " + e.target.checked);
    console.log(e.target.value);

    // add filter if checked, else remove
    if (e.target.checked) {
      SetActiveFilters((activeFilters) => [...activeFilters, e.target.value]);
    } else {
      SetActiveFilters(
        activeFilters.filter((filter) => filter !== e.target.value)
      );
    }

    // SetActiveFilters((oldArray) => [...oldArray, event]);
  };

  // useEffect should be listening to activeFilters and fetching
  // new results based on that and updating the useState
  useEffect(() => {}, []);

  return (
    <div className='filter'>
      {/* Heading */}
      <h4>Filters</h4>

      {/* Active Filters */}
      <div className='active-filter-box'>
        {activeFilters?.map((filter) => (
          <div id={filter.id} className='active-filter'>
            {filter}
            <button
              onClick={(e) => {
                // removes the filter from useState
                SetActiveFilters(
                  activeFilters.filter(
                    (filter) => !filter.localeCompare(e.target.value)
                  )
                );
                // resets check value to false
                e.target.checked = false;
                console.log(filter);
              }}>
              {" "}
              x{" "}
            </button>
          </div>
        ))}
      </div>

      {/* Form */}
      <Form id='filter-students'>
        <Accordion defaultActiveKey=''>
          {/* Student Year Filter */}
          <Form.Group>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='0'>
                Student Year
              </Accordion.Toggle>
              <Accordion eventKey='0'>
                <Card.Body>
                  <Form.Check
                    type='checkbox'
                    label='Freshman'
                    value='Freshman'
                    onClick={addFilterHandler}
                  />
                  <Form.Check
                    type='checkbox'
                    label='Sophomore'
                    value='Sophomore'
                    onClick={addFilterHandler}
                  />
                  <Form.Check
                    type='checkbox'
                    label='Junior'
                    value='Junior'
                    onClick={addFilterHandler}
                  />
                  <Form.Check
                    type='checkbox'
                    label='Senior'
                    value='Senior'
                    onClick={addFilterHandler}
                  />
                  <Form.Check
                    type='checkbox'
                    label='Masters'
                    value='Masters'
                    onClick={addFilterHandler}
                  />
                  <Form.Check
                    type='checkbox'
                    label='Doctorate'
                    value='Doctorate'
                    onClick={addFilterHandler}
                  />
                  <Form.Check
                    type='checkbox'
                    label='Alumni'
                    value='Alumni'
                    onClick={addFilterHandler}
                  />
                </Card.Body>
              </Accordion>
            </Card>
          </Form.Group>

          {/* Academics Filter */}
          <Form.Group>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='1'>
                Academics
              </Accordion.Toggle>
              <Accordion eventKey='1'>
                <Card.Body>
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
                </Card.Body>
              </Accordion>
            </Card>
          </Form.Group>

          {/* Stengths / Skills Filter */}
          <Form.Group>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='2'>
                Stengths / Skills
              </Accordion.Toggle>
              <Accordion eventKey='2'>
                <Card.Body>
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
                </Card.Body>
              </Accordion>
            </Card>
          </Form.Group>

          {/* GPA Filter */}
          <Form.Group>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='3'>
                GPA
              </Accordion.Toggle>
              <Accordion eventKey='3'>
                <Card.Body>
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
                </Card.Body>
              </Accordion>
            </Card>
          </Form.Group>

          {/* Review Score Filter */}
          <Form.Group>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey='4'
                className='accordion-header'>
                Review Score
              </Accordion.Toggle>
              <Accordion eventKey='4'>
                <Card.Body>
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
                </Card.Body>
              </Accordion>
            </Card>
          </Form.Group>
        </Accordion>
      </Form>
    </div>
  );
};

export default StudentFilters;
