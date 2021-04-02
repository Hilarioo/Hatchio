import { useState } from "react";
// CSS
import "../../../css/Theme.css";
import "../../../css/Search.css";
// Image(s) or SVG
import circle from "../../../content/svg/demo-card-profile.svg";
// React Boostrap
import Button from "react-bootstrap/Button";

const JobCard = () => {
  const [tags, setTags] = useState(["tag01", "tag02", "tag03"]);
  return (
    <div className='job-card'>
      <img src={circle} alt='' />
      <h4>position title</h4>
      <p>company name</p>
      <p>income</p>
      <Button>View</Button>
      <Button>Apply</Button>
      <ul>
        {tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobCard;
