import { useState } from "react";
// CSS
import "../../css/Theme.css";
import "../../css/Search.css";
// React Boostrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import JobCard from "./JobCard";

const JobSearch = () => {
  return (
    <>
      <div class="grid-container">
        <div class="item1">
          <h3>Browse Jobs</h3>
          <Form id="search-jobs">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Find</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                placeholder="Job Title, Company, or Keywords"
                aria-label="text"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            {/**
             <InputGroup className='mb-3'>
               <InputGroup.Prepend>
                 <InputGroup.Text id='basic-addon1'>Near</InputGroup.Text>
               </InputGroup.Prepend>
               <Form.Control
                 placeholder='zip code'
                 aria-label='text'
                 aria-describedby='basic-addon1'
               />
             </InputGroup>
             * 
             * 
             */}
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Range</InputGroup.Text>
              </InputGroup.Prepend>

              <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
                <option value="10">10 Miles</option>
                <option value="25">25 Miles</option>
                <option value="50">50 Miles</option>
                <option value="100">100 Miles</option>
              </Form.Control>
            </InputGroup>
            <Button variant="dark" type="submit">
              Search
            </Button>
          </Form>
        </div>
        <div class="item2">
          <h3>Filter(s)</h3>
          <Form id="filter-jobs">
            <Form.Group>
              <Form.Label>Type of Employement</Form.Label>
              <Form.Check type="checkbox" label="Full Time" />
              <Form.Check type="checkbox" label="Part Time" />
              <Form.Check type="checkbox" label="Internship" />
              <Form.Check type="checkbox" label="Contract" />
              <Form.Check type="checkbox" label="Remote" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Experience (years)</Form.Label>
              <Form.Check type="checkbox" label="No Experience" />
              <Form.Check type="checkbox" label="Minimum Years" />
              <Form.Control type="range" class="form-range" min="0" max="25" step="1" id="customRange3" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Experience Level</Form.Label>
              <Form.Check type="checkbox" label="Entry Level" />
              <Form.Check type="checkbox" label="Mid Level" />
              <Form.Check type="checkbox" label="Senior Level" />
              <Form.Check type="checkbox" label="Directors" />
              <Form.Check type="checkbox" label="VP or Above" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Salary</Form.Label>
              <Form.Check type="checkbox" label="Unpaid" />
              <Form.Check type="checkbox" label="Minimum Salary" />
              <Form.Control type="range" class="form-range" min="1" max="100000" step="1000" id="customRange3" />
            </Form.Group>
          </Form>
        </div>
        <div class="item3">
          <h4>results</h4>
          <JobCard />
        </div>
      </div>
    </>
  );
};

export default JobSearch;
