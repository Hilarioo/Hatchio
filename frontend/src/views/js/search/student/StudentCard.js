import { useState, useContext } from "react";
// CSS
import "../../../css/Theme.css";
import "../../../css/Search.css";
// React Boostrap
import Accordion from "react-bootstrap/Accordion";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// (if image URL empty) Creates a default logo with the First Letter of the User's Name
const createImageFromInitials = (name) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  // declares canvas size
  canvas.width = canvas.height = 80;
  // creates circl within canvas
  context.strokeStyle = "#2b2b2b";
  context.fillStyle = "rgba(43, 43, 43, 1)";
  context.lineWidth = 2;
  context.beginPath();
  context.arc(canvas.width / 2, canvas.height / 2, 30, 0, 2 * Math.PI);
  context.stroke();
  context.fill();

  // adds the first letter of the user's first name within the circle
  context.fillStyle = "#fff";
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.font = `${2}rem Roboto`;
  context.fillText(name.charAt(0), canvas.width / 2, canvas.height / 2);

  // returns base64 string for the above canvas
  return canvas.toDataURL();
};

const StudentCard = ({
  // default props provided if empty
  image = "",
  studentName = "student name",
  major = "undeclared",
  rating = "no ratings yet",
  gpa = "0",
  schoolName = "school name",
  year = "freshman",
  about = "This is something about me",
  tags = ["one", "two", "three"],
}) => {
  // expands & collpases user's more info
  const ContextAwareToggle = ({ children, eventKey, callback }) => {
    // styling currently not working, but functionallity is
    const currentEventKey = useContext(0);

    const decoratedOnClick = useAccordionToggle(eventKey, () => callback && callback(eventKey));

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
      <button
        type="button"
        style={{
          backgroundColor: isCurrentEventKey ? "yellow" : "#2b2b2b",
          color: isCurrentEventKey ? "yellow" : "#fff",
        }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="student-card">
      <img src={image.length <= 0 ? createImageFromInitials(studentName) : image} alt={studentName.charAt(0)} />
      <h4>{studentName}</h4>
      <p>Major:{major}</p>
      <p>GPA:{gpa}</p>
      <Button>Message</Button>
      <Button>Profile</Button>
      {/* More information about the student */}
      <Accordion>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="0">Expand</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>{schoolName}</p>
              <p>{year}</p>
              <p>{about}</p>
              {/* Top 3 qualities */}
              <ul>
                {tags.map((tag) => (
                  <li>{tag}</li>
                ))}
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default StudentCard;
