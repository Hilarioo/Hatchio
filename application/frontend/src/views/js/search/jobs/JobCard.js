import { useState } from "react";
// CSS
import "../../../css/Theme.css";
import "../../../css/Search.css";
// Image(s) or SVG
import circle from "../../../content/svg/demo-card-profile.svg";
// React Boostrap
import Button from "react-bootstrap/Button";

const JobCard = ({
  PositionTitle = "",
  CompanyName = "",
  Income = 0,
  AboutUs = "",
  JobType = "",
}) => {
  const [tags, setTags] = useState(["tag01", "tag02", "tag03"]);
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
      <Button>View</Button>
      <Button>Apply</Button>
    </div>
  );
};

export default JobCard;
