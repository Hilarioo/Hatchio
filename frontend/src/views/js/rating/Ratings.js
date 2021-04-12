import { useState, useEffect } from "react";
//Components
import StudentCard from "./RatingCard.js";
//import API
import API_FETCH_STUDENT from "../../../models/student_cards";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
// CSS
import "../../css/Theme.css";
import "../../css/Search.css";
const Ratings = () => {
  const [dbStudents, setdbStudents] = useState([]);
  useEffect(() => API_FETCH_STUDENT(setdbStudents, []), []);
  const handleSubmit = (e) => {
    //insert into associate student ratings page
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Recommendation </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            placeholder="String text with words that assess students in generic categories like his/her honesty,integrity,courage,skillset,etc."
            aria-label="text"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Responsible </InputGroup.Text>
          </InputGroup.Prepend>

          <Form.Control
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            custom
          >
            <option value="Select">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Control>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">TeamWork </InputGroup.Text>
          </InputGroup.Prepend>

          <Form.Control
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            custom
          >
            <option value="Select">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Control>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Leadership </InputGroup.Text>
          </InputGroup.Prepend>

          <Form.Control
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            custom
          >
            <option value="Select">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Control>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
              Committed to Success{" "}
            </InputGroup.Text>
          </InputGroup.Prepend>

          <Form.Control
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            custom
          >
            <option value="Select">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Control>
        </InputGroup>
        <Button variant="dark" type="submit">
          Rate Student
        </Button>
      </Form>
      <div class="results">
        {dbStudents.map((student) => (
          <StudentCard
            // image={student.profile_image == null ? `""` : student.profile_image}
            image={""}
            studentName={student.first_name + " " + student.last_name}
            major={student.study_major}
            rating={student.rating_total}
            gpa={student.school_gpa}
            schoolName={student.school}
            year={student.start_year}
            about={student.about_me}
            student_enrollment={student.school_grade_level}
          />
        ))}
      </div>
    </div>
  );
};

export default Ratings;
