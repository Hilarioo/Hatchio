/*
Author: Jose Gonzalez
File: Search.css
Styling for the following pages:
  1. StudentSearch.js
  2. StudentCard.js
  3. JobSearch.js
  4. JobCard.js
*/

// CSS
import "../../../css/Search.css";
// Default Image (if user has no image)
import { defaultImage } from "../../global/DefaultImage";
// React Boostrap
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

const StudentCard = ({
  // default props provided if empty
  image = "",
  studentName = "student name",
  major = "undeclared",
  rating = 3,
  gpa = "0",
  schoolName = "school name",
  student_enrollment = "",
  about,
}) => {
  return (
    <div className="student-card">
      <header>
        <img
          src={image.length <= 0 ? defaultImage(studentName) : image}
          alt={studentName.charAt(0)}
        />
        <div className="info">
          <div className="flex-box name-enrollment">
            <h4>{studentName}</h4>
            <p id="enrollment">{student_enrollment}</p>
          </div>
          <h6>{schoolName}</h6>
          <div className="flex-box">
            <p className="gpa">{gpa} GPA</p>
            {rating === 0 ? (
              <p id="no-rating">No ratings yet</p>
            ) : (
              <ProgressBar
                now={rating}
                label={`${rating}` + " / 5"}
                min="0"
                max="5"
                variant="info"
                style={{ width: "60%" }}
                id="progress-bar"
              />
            )}
          </div>
        </div>
      </header>
      <div className="flex-box">
        <Button>Message</Button>
        <Button>Profile</Button>
      </div>
    </div>
  );
};

export default StudentCard;
