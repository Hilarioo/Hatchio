/**
 * File: PostJobs.js
 * Purpose: Employers to Insert Job
 * Functionality IE: Send POST request to Backend Server
 * Authors: Aaron Set API and Response Check | Jose Form Handling & Format
 */

import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
//API
import API_EMPLOYER_INSERT_JOB from "../../../../models/insert_job";
const PostJobs = () => {
  //Init user
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]); //Cur use

  //Change Objects Value W/ Form
  const [jobListing, setJobListing] = useState({
    Employer_ID: cookie.ID_OF_USER,
    organization_name: "Organization_Name",
    position_title: "User Experience Designer",
    location: "location",
    job_type: "full time",
    experience_years: 2,
    experience_levels: "Senior Level",
    salary: 500000,
    about_us: "Scale up the product with developers then reap profits",
    the_opportunity: "Paycheck",
    task_responsibilites: "Work along w/ Developers",
    skillset: "Good Stamina",
    benefits: "401k",
    landing_image: null,
  });
  //Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await API_EMPLOYER_INSERT_JOB(jobListing);
    console.log(response);
    if (response == 400) {
      console.log("error");
    }
    if (response == 200) {
      console.log("success");
    }
    return;
  };
  if (cookie.Type_User === "employer") {
    return (
      <div>
        <p>Employer Insert Jobs</p>
        <p>
          Form Post @JOSE can you set up the form so it changes the object{}{" "}
          inside of useState, look at the file PostJobs.js and you'll know what.
          The query is ready to go in this file to use, i just need help w/ the
          form i mean
        </p>
      </div>
    );
  }
  return (
    <div>
      <h3>Sign in as an Employer to Access this page</h3>
    </div>
  );
};

export default PostJobs;
