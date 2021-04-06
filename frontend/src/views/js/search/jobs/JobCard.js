import { useState } from "react";
// CSS
import "../../../css/Theme.css";
import "../../../css/Search.css";
// Image(s) or SVG
import circle from "../../../content/svg/demo-card-profile.svg";
// React Boostrap
import Button from "react-bootstrap/Button";

const JobCard = ({
  // default props provided if empty
  title = "Job Title",
  company = "Company",
  salary = "0",
  about = "company did not provide an about paragraph",
  type = "unknown",
}) => {
  const [tags, setTags] = useState(["tag01", "tag02", "tag03"]);
  return (
    <div className='job-card'>
      <img src={circle} alt='' />
      <h4>{title}</h4>
      <p>{company}</p>
      <p>{salary}</p>
      <p>{about}</p>
      <p>{type}</p>
      <Button>View</Button>
      <Button>Apply</Button>
    </div>
  );
};

export default JobCard;
