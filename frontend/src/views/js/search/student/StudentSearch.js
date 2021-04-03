import { useState, useEffect } from "react";
// CSS
import "../../../css/Theme.css";
import "../../../css/Search.css";
// Componenets
import StudentFilters from "./StudentFilters";
import StudentCard from "./StudentCard";
import StudentSearchBar from "./StudentSearchBar";
//Form
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
//API
import api_fetch_students from "../../../../models/student_cards";
import API_STUDENT_CARD_FILTER from "../../../../models/student_filters";
import API_JOB_LISTINGS_FETCH_FILTER from "../../../../models/job_filters";

const StudentSearch = () => {
  const [dbStudents, setdbStudents] = useState([]);
  useEffect(() => api_fetch_students(setdbStudents), []);

  const handleSubmit = (e) => {
    e.preventDefault(); //Dont Refresh

    API_JOB_LISTINGS_FETCH_FILTER(
      setdbStudents,
      e.target.academic_major.value,
      e.target.student_year.value,
      e.target.rating_score.value,
      e.target.gpa_range.value,
      e.target.strength_keyword.value
    );
  };

  return (
    <>
      <div class="grid-container">
        {/*<StudentSearchBar /> */}
        <StudentFilters />
        {/* one free text entry field */}
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Academic Major </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control name="academic_major" placeholder="Major" aria-label="text" aria-describedby="basic-addon1" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Student Year </InputGroup.Text>
            </InputGroup.Prepend>

            <Form.Control name="student_year" as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
              <option value="Select">Select</option>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
              <option value="Masters">Masters</option>
            </Form.Control>
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Rating Score </InputGroup.Text>
            </InputGroup.Prepend>

            <Form.Control name="rating_score" as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
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
              <InputGroup.Text id="basic-addon1">GPA Range </InputGroup.Text>
            </InputGroup.Prepend>

            <Form.Control name="gpa_range" as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
              <option value="Select">Select</option>
              <option value="1">>1</option>
              <option value="2">>2</option>
              <option value="3">>3</option>
              <option value="4">>4</option>
              <option value="5">5</option>
            </Form.Control>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Strengths </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              name="strength_keyword"
              placeholder="honesty,integrity,courage,skillset,etc"
              aria-label="text"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button variant="dark" type="submit">
            Filter Students
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
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentSearch;
