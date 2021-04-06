import { useState, useContext } from "react";
// CSS
import "../../../css/Theme.css";
import "../../../css/Search.css";
// Default Image
import { defaultImage } from "../../global/DefaultImage";
// React Boostrap
import Accordion from "react-bootstrap/Accordion";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const StudentCard = ({
  // default props provided if empty
  image = "",
  studentName = "student name",
  major = "undeclared",
  rating = "no ratings yet",
  gpa = "0",
  schoolName = "school name",
  year = "",
  about = "This is something about me",
  tags = ["one", "two", "three"],
  student_enrollment = "",
}) => {
  // expands & collpases user's more info
  const ContextAwareToggle = ({ children, eventKey, callback }) => {
    // styling currently not working, but functionallity is
    const currentEventKey = useContext(0);

    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
      <button
        type='button'
        style={{
          backgroundColor: isCurrentEventKey ? "yellow" : "#2b2b2b",
          color: isCurrentEventKey ? "yellow" : "#fff",
        }}
        onClick={decoratedOnClick}>
        {children}
      </button>
    );
  };

  return (
    <div className='student-card'>
      <img
        src={image.length <= 0 ? defaultImage(studentName) : image}
        alt={studentName.charAt(0)}
      />
      <h4>{studentName}</h4>
      <p>
        <b>Major</b>:{major}
      </p>
      <p>
        <b>GPA</b>:{gpa}
      </p>
      <p>
        <b>Rating Total</b>:{rating}
      </p>
      <p>
        <b>Starting Year</b>: {year}
      </p>
      <p>
        <b>Student Year: {student_enrollment}</b>
      </p>
      <Button>Message</Button>
      <Button>Profile</Button>
      {/* More information about the student */}
      <Accordion>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey='0'>Expand</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
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
