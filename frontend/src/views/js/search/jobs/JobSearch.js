import { useState, useEffect } from "react";
// CSS
import "../../../css/Theme.css";
import "../../../css/Search.css";
// React Boostrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import JobCard from "./JobCard";

//API
import API_JOB_LISTINGS_FETCH from "../../../../models/job_cards";
import API_JOB_LISTINGS_FETCH_FILTER from "../../../../models/job_filters";

const JobSearch = () => {
  useEffect(() => API_JOB_LISTINGS_FETCH(setdbJobListings), []);
  const [dbJobListings, setdbJobListings] = useState([]); //Search Results
  const handleSubmit = (e) => {
    e.preventDefault();
    API_JOB_LISTINGS_FETCH_FILTER(setdbJobListings, e.target[0].value, e.target[1].value);
  };

  return (
    <>
      <div class="grid-container">
        <div class="item1">
          <h3>Browse Jobs</h3>
        </div>
        <div class="item2">
          <h3>Filter(s)</h3>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Job Type </InputGroup.Text>
              </InputGroup.Prepend>

              <Form.Control name="student_year" as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
                <option value="Select">Select</option>
                <option value="Full Time">Full Time</option>
                <option value="PartTime">Part Time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
                <option value="Remote">Remote</option>
              </Form.Control>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Position Type </InputGroup.Text>
              </InputGroup.Prepend>

              <Form.Control name="student_year" as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
                <option value="Select">Select</option>
                <option value="User Experience Designer">User Experience Designer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
              </Form.Control>
            </InputGroup>
            <Button variant="dark" type="submit">
              Filter
            </Button>
          </Form>
        </div>
        <div class="item3">
          <h4>results</h4>
          <JobCard />
          {dbJobListings.map((jobs) => (
            <JobCard
              PositionTitle={jobs.position_title}
              CompanyName={jobs.organization_name}
              Salary={jobs.salary}
              Income={jobs.salary}
              JobType={jobs.job_type}
              AboutUs={jobs.about_us}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default JobSearch;
