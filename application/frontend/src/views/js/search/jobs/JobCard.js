import { useState } from "react";
import { useHistory } from "react-router-dom";
// CSS
import "../../../css/Theme.css";
import "../../../css/Search.css";
// Image(s) or SVG
import circle from "../../../content/svg/demo-card-profile.svg";
// React Boostrap
import Button from "react-bootstrap/Button";

const JobCard = ({
  Listing_ID = 0,
  PositionTitle = "",
  CompanyName = "",
  Income = 0,
  AboutUs = "",
  JobType = "",
}) => {
  const history = useHistory();
  const Redirect_Job_View = (Listing_ID) => {
    console.log(`Listing ID: ${Listing_ID}`);
    history.push({
      pathname: "/full-job-view",
      Listing_id: Listing_ID,
    });
  };
  return (
    <div className="job-card">
      <img src={circle} alt="" />
      <h4>
        <b>Position Title:</b> {PositionTitle}
      </h4>
      <p>
        <b>Company Name:</b> {CompanyName}
      </p>
      <p>
        <b>Income:</b> {Income}
      </p>
      <p>
        <b>Job Type:</b> {JobType}
      </p>
      <p>
        <b>About Us:</b> {AboutUs}
      </p>
      <Button onClick={() => Redirect_Job_View(Listing_ID)}>View</Button>
      <Button>Apply</Button>
    </div>
  );
};

export default JobCard;
