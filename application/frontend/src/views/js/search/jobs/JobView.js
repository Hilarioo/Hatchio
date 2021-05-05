// React
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
// React Boostrap
import Button from "react-bootstrap/Button";

//API
import API_JOB_LISTING_VIEW from "../../../../models/GET/Jobs/job_view";
const JobView = ({
  location: {
    state: { Listing_ID },
  },
}) => {
  const [dbJob, setdbJob] = useState([{}]);

  //JSX
  const Job_Listing_Information = (
    <div>
      <p>
        {dbJob[0].length === 0
          ? "Loading or Database Disconnected"
          : "Organization Name" +
            dbJob[0].organization_name +
            "Job Type" +
            dbJob[0].job_type +
            "Job Type" +
            dbJob[0].experience_years +
            "Experience Level" +
            dbJob[0].experience_level +
            "Salary" +
            dbJob[0].salary +
            "About Us" +
            dbJob[0].about_us +
            "The Oppurtunityj" +
            dbJob[0].the_oppurtunity +
            "The Skillset" +
            dbJob[0].skillset +
            "Benefits" +
            dbJob[0].benefits +
            "Task Responsibilities" +
            dbJob[0].task_responsibilities +
            ""}
      </p>
    </div>
  );

  useEffect(() => {
    API_JOB_LISTING_VIEW(setdbJob, Listing_ID);
  }, []);

  return (
    <div>
      <h3>Job View Page</h3>
      <h5>Information</h5>
      {Job_Listing_Information}
    </div>
  );
};

export default JobView;
