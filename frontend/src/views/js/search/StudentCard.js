import { useState } from "react";
// CSS
import "../../css/Theme.css";
import "../../css/Search.css";
// React Boostrap
import Button from "react-bootstrap/Button";

const StudentCard = () => {
  const [tags, setTags] = useState(["tag01", "tag02", "tag03"]);
  return (
    <div className='student-card'>
      <img src='../../content/svg/demo-card-profile.svg' alt='' />
      <h4>student name</h4>
      <p>school name</p>
      <p>No Ratings yet</p>
      <Button>Profile</Button>
      <Button>Message</Button>
      <ul>
        {tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentCard;
