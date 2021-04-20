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
    <div className='job-card'>
      <img src={circle} alt='' />
      <h4>Position Title: {PositionTitle}</h4>
      <p>Company Name: {CompanyName}</p>
      <p>Income {Income}</p>
      <p>Job Type {JobType}</p>
      <p>About Us: {AboutUs}</p>
      <Button>View</Button>
      <Button>Apply</Button>
    </div>
  );
};

export default JobCard;
