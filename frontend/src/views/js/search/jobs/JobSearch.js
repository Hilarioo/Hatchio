import { useState, useEffect } from "react";
// CSS
import "../../../css/Theme.css";
import "../../../css/Search.css";
// React Boostrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import JobCard from "./JobCard";

import { port_host } from "../../../../config";
//API
//import API_JOB_LISTINGS_FETCH from "../../../../models/job_cards";

const JobSearch = () => {
  useEffect(() => API_JOB_LISTINGS_FETCH_V2(setdbJobListings), []);
  const [dbJobListings, setdbJobListings] = useState([]); //Search Results
  function API_JOB_LISTINGS_FETCH_V2(setArr) {
    fetch(`${port_host}/job_cards`)
      .then((response) => response.json())
      .then((json) => setArr(json));
  }

  return (
    <>
      <div class="grid-container">
        <div class="item1">
          <h3>Browse Jobs</h3>
        </div>
        <div class="item2">
          <h3>Filter(s)</h3>
        </div>
        <div class="item3">
          <h4>results</h4>
          <JobCard />
          {dbJobListings.map((jobs) => (
            <div>
              <hr></hr>
              <p>Position Title {jobs.position_title}</p>
              <p>Company Name : {jobs.organization_name}</p>
              <p>Salary : {jobs.salary}</p>
              <p>About Us: {jobs.about_us}</p>
              <p>Job Type: {jobs.job_type}</p>
              <hr></hr>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobSearch;
