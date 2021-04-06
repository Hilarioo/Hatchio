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

const JobSearch = () => {
  useEffect(() => API_JOB_LISTINGS_FETCH(setdbJobListings), []);
  const [dbJobListings, setdbJobListings] = useState([]); //Search Results

  return (
    <>
      <div className='grid-container'>
        <div className='header'>
          <h3>Browse Jobs</h3>
        </div>
        <div className='filter'>
          <h3>Filter(s)</h3>
        </div>
        <div className='results'>
          <h4>results</h4>
          {dbJobListings.map((job) => (
            <JobCard
              // image={job.profile_image == null ? `""` : job.profile_image}
              title={job.position_title}
              company={job.organization_name}
              salary={job.salary}
              about={job.about_us}
              type={job.job_type}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default JobSearch;
