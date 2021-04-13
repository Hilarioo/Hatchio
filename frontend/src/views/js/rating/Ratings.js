import { useState, useEffect } from "react";
import API_FETCH_STUDENT from "../../../models/student_cards";
import API_PROFESSOR_RATE_STUDENT from "../../../models/professor_rate";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useCookies } from "react-cookie";
const Ratings = () => {
  //Get Current Professor ID
  //Set Current User
  const [cookie] = useCookies(["ID_OF_USER"]);
  const [dbStudents, setdbStudents] = useState([]);
  //Form Inputs
  const [recommendation, setRecommendation] = useState("");
  const [responsible, setResponsible] = useState(0);
  const [teamwork, setTeamWork] = useState(0);
  const [leadership, setLeadership] = useState(0);
  const [committedToSuccess, setCommittedToSuccess] = useState(0);
  //Fetch Sudents
  useEffect(() => API_FETCH_STUDENT(setdbStudents, []), []);
  const rate = async (student_id) => {
    const sent_bool = await API_PROFESSOR_RATE_STUDENT(
      student_id, //Student ID
      cookie.ID_OF_USER, //Professor ID
      responsible, //Responsible int
      teamwork, //Teamwork int
      leadership, //leaderhsip int
      committedToSuccess, //int
      recommendation, //str
      2 //avg out the total score todo
    );
    console.log(sent_bool);
    //Send Rating to Back end
  };
  return (
    <div>
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Recommendation </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            placeholder="String text with words that assess students in generic categories like his/her honesty,integrity,courage,skillset,etc."
            aria-label="text"
            aria-describedby="basic-addon1"
            onChange={(e) => setRecommendation(e.target.value)}
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
            onChange={(e) => setResponsible(e.target.value)}
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
            onChange={(e) => setTeamWork(e.target.value)}
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
            onChange={(e) => setLeadership(e.target.value)}
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
            onChange={(e) => setCommittedToSuccess(e.target.value)}
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
      </Form>
      <div>
        {dbStudents.map((student) => (
          <div>
            <h3>{student.first_name + " " + student.last_name}</h3>
            <button onClick={() => rate(student.student_id)}>Rate Me</button>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
