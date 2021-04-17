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
import { useState } from "react";
// Default Image (if user has no image)
import { defaultImage } from "../../global/DefaultImage";
// React Boostrap
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
//Pop Up Form
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
//Cookie
import { useCookies } from "react-cookie";
//API
import API_PROFESSOR_RATE_STUDENT from "../../../../models/professor_rate";
import { useHistory } from "react-router-dom";

const StudentCard = ({
  // default props provided if empty
  image = "",
  studentName = "student name",
  rating = 3,
  gpa = "0",
  schoolName = "school name",
  studentEnrollment = "",
  major = "undeclared",
  studentID = 0,
  about,
}) => {
  //Redirect
  const history = useHistory();
  //Cookie
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]); //Cur use
  //Form Inputs
  const [recommendation, setRecommendation] = useState("");
  const [responsible, setResponsible] = useState(0);
  const [teamwork, setTeamWork] = useState(0);
  const [leadership, setLeadership] = useState(0);
  const [committedToSuccess, setCommittedToSuccess] = useState(0);

  //Redirec to Post Jobs
  const Redirect_Insert_Jobs = () => {
    history.push("/insert-jobs");
  };
  //Redirect to Profile
  const RedirectProfile = () => {
    //send to another page
    //send in the student id
    //fetch the id with all the information
    //thats it
    console.log("Redirecting Profile");
    history.push({
      pathname: "/full-student-profile",
      example: studentID,
      state: { detail: "some_value" },
    });
  };
  //Rate Form Submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const sent_bool = await API_PROFESSOR_RATE_STUDENT(
      studentID, //Student ID
      cookie.ID_OF_USER, //Professor ID
      responsible, //Responsible int
      teamwork, //Teamwork int
      leadership, //leaderhsip int
      committedToSuccess, //int
      recommendation, //str
      (responsible + teamwork + leadership + committedToSuccess) / 4 //average
    );
    //If Succesful Sent, Reload Page
    if (sent_bool == true) {
      window.location.reload();
    }
    console.log(sent_bool);
    //Send Rating to Back end
  };
  if (cookie.Type_User == "professor") {
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
              <p id="enrollment">{studentEnrollment}</p>
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
          <Popup trigger={<button>Employ</button>}>
            <div>You must be a Employee!Sign In as an Employee</div>
          </Popup>
          <Button onClick={() => RedirectProfile()}>Profile</Button>
          <Popup trigger={<button> Rate</button>}>
            <div>
              <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                      Recommendation{" "}
                    </InputGroup.Text>
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
                    <InputGroup.Text id="basic-addon1">
                      Responsible{" "}
                    </InputGroup.Text>
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
                    <InputGroup.Text id="basic-addon1">
                      TeamWork{" "}
                    </InputGroup.Text>
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
                    <InputGroup.Text id="basic-addon1">
                      Leadership{" "}
                    </InputGroup.Text>
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
                  <Button variant="dark" type="submit">
                    Rate Send
                  </Button>
                </InputGroup>
              </Form>
            </div>
          </Popup>
        </div>
      </div>
    );
  }

  if (cookie.Type_User == "employer") {
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
              <p id="enrollment">{studentEnrollment}</p>
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
          <Button onClick={() => Redirect_Insert_Jobs()}>Employ</Button>
          <Button onClick={() => RedirectProfile()}>Profile</Button>
          <Popup trigger={<button> Rate</button>}>
            <div> Sign in as a professor!</div>
          </Popup>
        </div>
      </div>
    );
  }

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
            <p id="enrollment">{studentEnrollment}</p>
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
        <Popup trigger={<button>Employ</button>}>
          <div>You must be a Employee!Sign In as an Employee</div>
        </Popup>
        <Button onClick={() => RedirectProfile()}>Profile</Button>
        <Popup trigger={<button> Rate</button>}>
          <div> Sign in as a professor!</div>
        </Popup>
      </div>
    </div>
  );
};

export default StudentCard;
