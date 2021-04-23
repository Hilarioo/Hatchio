import { useState, useEffect } from "react";
// CSS
import "../../../css/Theme.css";
import "../../../css/Jobs.css";
// React Boostrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import JobCard from "./JobCard";

//API
import API_JOB_LISTINGS_FETCH from "../../../../models/GET/Jobs/job_cards";
import API_JOB_LISTINGS_FETCH_FILTER from "../../../../models/GET/Jobs/job_filters";

const JobSearch = () => {
  useEffect(() => API_JOB_LISTINGS_FETCH(setdbJobListings), []); // Load From DB
  const [dbJobListings, setdbJobListings] = useState([]); //Search Results

  const handleSubmit = (e) => {
    e.preventDefault();
    API_JOB_LISTINGS_FETCH_FILTER(
      setdbJobListings,
      e.target[0].value,
      e.target[1].value
    );
  };

  return (
    <>
      <div className="grid-container">
        <div className="header">
          <h3>Browse Jobs</h3>
        </div>
        <div className="filter">
          <h3>Filter(s)</h3>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Job Type </InputGroup.Text>
              </InputGroup.Prepend>

              <Form.Control
                name="student_year"
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
              >
                <option value="Select">Select</option>
                <option value="Full Time">Full Time</option>
                <option value="PartTime">Part Time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
                <option value="Remote">Remote</option>
              </Form.Control>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  Position Type{" "}
                </InputGroup.Text>
              </InputGroup.Prepend>

              <Form.Control
                name="student_year"
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
              >
                <option value="Select">Select</option>
                <option value="User Experience Designer">
                  User Experience Designer
                </option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Full Stack Developer">
                  Full Stack Developer
                </option>
              </Form.Control>
            </InputGroup>
            <Button variant="dark" type="submit">
              Filter
            </Button>
          </Form>
        </div>
        <div className="results">
          <h4>results</h4>
          {/** IF Database Not Connected */}
          {dbJobListings.length == 0
            ? "Database Not Connected"
            : dbJobListings.map((jobs) => (
                <JobCard
                  Listing_ID={jobs.listing_id}
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
