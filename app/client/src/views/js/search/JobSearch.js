import { useState } from "react";
// CSS
import "../../css/Theme.css";
import "../../css/Search.css";
// React Boostrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import JobCard from "./JobCard";

import { port_host } from "../../../config.js";

const JobSearch = () => {
  //States
  const [keyword, setKeyword] = useState(""); //Keyword:Field-Capture
  const [range, setRange] = useState("Select"); //Range:Field-Capture - 10mile range by default
  const [dbResults, setdbResults] = useState([]); //Search Results
  //Fetch
  const DB_Search = () => {
    if (keyword === "" && range === "Select") {
      fetch(`${port_host}/joblistings`)
        .then((response) => response.json())
        .then((json) => {
          setdbResults(json);
          console.log(json);
        });
      return;
    }
    fetch(`${port_host}/search/joblistings?keyword=${keyword}&miles=${range}`)
      .then((response) => response.json())
      .then((json) => {
        setdbResults(json);
        console.log(json);
      });
  };
  //Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setdbResults([]);
    DB_Search();
    console.log(`Keyword:${keyword} Range${range}`);
  };
  return (
    <>
      <div class="grid-container">
        <div class="item1">
          <h5>ALERT: if you want to see what's in the database, leave Find Field: Empty and Range: Select </h5>
          <h3>Browse Jobs</h3>
          <Form id="search-jobs" onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Find</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                placeholder="Job Title, Company, or Keywords"
                aria-label="text"
                aria-describedby="basic-addon1"
                onChange={(e) => setKeyword(e.target.value)}
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

              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
                onChange={(e) => setRange(e.target.value)}
              >
                <option value="Select">Select</option>
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
          {JSON.stringify(dbResults)}
          <JobCard />
        </div>
      </div>
    </>
  );
};

export default JobSearch;
