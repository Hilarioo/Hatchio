import { useEffect, useState } from "react";
// CSS
import "../../css/Theme.css";
import "../../css/Search.css";
// React Boostrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import { port_host } from "../../../config.js";

const JobSearch = () => {
  //States
  const [keyword, setKeyword] = useState(""); //Keyword:Field-Capture
  const [dbResults, setdbResults] = useState([]); //Search Results
  useEffect(() => {
    DB_Search();
  });
  const listItems = dbResults.map((d) => (
    <div key={d.employer_id}>
      <p>
        <b>Position Title Opening</b> {d.position_title}
      </p>
      <p>
        <b>Company Name</b> {d.company_name}
      </p>
      <p>
        <b>Location:</b> {d.location}
      </p>
      <p>
        <b>salary</b>
        {d.salary}
      </p>
      <p>
        <b>Job Description</b> {d.job_description}
      </p>
      <p>
        <b>Employment Time</b> {d.type_of_employment}
      </p>
    </div>
  ));
  //Fetch
  const DB_Search = () => {
    fetch(`${port_host}/joblistings`)
      .then((response) => response.json())
      .then((json) => {
        setdbResults(json);
        console.log(json);
      });
    return;
  };
  //Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setdbResults([]); // Reset DB State
    DB_Search();
  };
  return (
    <>
      <div class="grid-container">
        <div class="item1">
          <h3>Browse Jobs</h3>
          <Form id="search-jobs" onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Generic Find</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                placeholder="Job Title, Company, or Keywords"
                aria-label="text"
                aria-describedby="basic-addon1"
                onChange={(e) => setKeyword(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Job Title Position </InputGroup.Text>
              </InputGroup.Prepend>

              <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
                <option value="Select">Select</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="10">Frontend Developer</option>
                <option value="25">Database Developer</option>
                <option value="50">Designer</option>
                <option value="100">Product Lead</option>
              </Form.Control>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Salary Range </InputGroup.Text>
              </InputGroup.Prepend>

              <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
                <option value="Select">Select</option>
                <option value="Backend Developer">25K</option>
                <option value="10">50k</option>
                <option value="25">75k</option>
                <option value="50">100k</option>
                <option value="100">200k</option>
              </Form.Control>
            </InputGroup>

            {/**
             * 
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Languages </InputGroup.Text>
              </InputGroup.Prepend>

              <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
                <option value="Select">Select</option>
                <option value="Backend Developer">C++</option>
                <option value="10">Python</option>
                <option value="25">C</option>
                <option value="50">Java</option>
                <option value="100">R</option>
              </Form.Control>
            </InputGroup>

             * 
             */}

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Types of Employment </InputGroup.Text>
              </InputGroup.Prepend>

              <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
                <option value="Select">Select</option>
                <option value="Backend Developer">Full Time</option>
                <option value="10">Part Time</option>
                <option value="25">Internships </option>
                <option value="50"> Contract</option>
                <option value="100">Remote</option>
              </Form.Control>
            </InputGroup>
            <Button variant="dark" type="submit">
              Search
            </Button>
          </Form>
        </div>
        {listItems}
      </div>
    </>
  );
};

export default JobSearch;
