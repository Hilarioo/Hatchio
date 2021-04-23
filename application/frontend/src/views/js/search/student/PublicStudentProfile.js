/*
Author: Aaron S | Jose for formatting later i think
File: Full Student Profile
Functionality: Works with onClick from student search to access any full students view
*/
import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
// CSS
import "../../../css/Profiles.css";
import "../../../css/Theme.css";
import styled from "styled-components";
// React Boostrap
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
//Import SVG Icons
import LocationIcon from "../../../content/svg/location-icon.svg";
import GlobeIcon from "../../../content/svg/globe-icon.svg";
import LinkedinIcon from "../../../content/svg/linkedin-icon.svg";
import ResumeIcon from "../../../content/svg/resume-icon.svg";
import GithubIcon from "../../../content/svg/github-icon.svg";
import ProjectIcon from "../../../content/svg/project-icon.svg";
import ExperienceIcon from "../../../content/svg/experience-icon.svg";
import EducationIcon from "../../../content/svg/education-icon.svg";
// Form Components
import Popup from "reactjs-popup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// Default Image
import { defaultImage } from "../../global/DefaultImage";
//API
import API_USER_GET_PROFILE from "../../../../models/user_profile";
import API_PROFESSOR_RATE_STUDENT from "../../../../models/professor_rate";
//CSS Form Pop Up
const StyledPopup = styled(Popup)`
  &-content[role="tooltip"] {
    width: 1000px;
  }
`;

const PublicStudentProfile = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]); //Current User
  const [userProfile, setuserProfile] = useState([
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
  ]);
  const [studentID, setStudentID] = useState(0);
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
    //If Succesful Sent,Redirect to Student Search View
    if (sent_bool === true) {
      history.push("/search-candidates");
    }
    if (sent_bool === false) {
      console.log("Ratings Unsuccesful");
    }
  };
  //Form Inputs
  const [recommendation, setRecommendation] = useState("");
  const [responsible, setResponsible] = useState(0);
  const [teamwork, setTeamWork] = useState(0);
  const [leadership, setLeadership] = useState(0);
  const [committedToSuccess, setCommittedToSuccess] = useState(0);

  //Handle Refresh
  const [locationStatus, setLocationStatus] = useState(0);

  useEffect(() => {
    //If History was not Pushed
    if (location.Student_ID == undefined) {
      console.log("Undefined");
    } else {
      setLocationStatus(1); //Succesfull Location Status Push
      API_USER_GET_PROFILE("student", location.Student_ID, setuserProfile);
      setStudentID(location.Student_ID);
    }
  }, [location]);

  const RedirectStudentSearch = () => {
    history.push("/search-candidates");
  };
  if (locationStatus == 0) {
    return (
      <div>
        <h3>
          Please return back to the student search view page and do not refresh
          when viewing a student's full profile page.
        </h3>
        <Button onClick={() => RedirectStudentSearch()}>
          Go Back to Student Search
        </Button>
      </div>
    );
  }

  if (cookie.Type_User === `employer`) {
    return (
      <>
        <Button onClick={() => RedirectStudentSearch()}>
          Go Back to Student Search
        </Button>
        <hr></hr>
        {/* heading */}
        <div className="student-heading">
          {/* creates default image if none provided */}
          <img
            src={
              userProfile[1][0].profile_image === null
                ? defaultImage("Student Name")
                : userProfile[1][0].profile_image
            }
            alt={"S"}
          />
          <div className="right">
            {/* Student Name */}
            <h1>
              {userProfile[4][0].first_name + ` ` + userProfile[4][0].last_name}
            </h1>

            {/* Student Location */}
            <div className="flex-box">
              <img src={LocationIcon} alt="location pin" />
              <p>{userProfile[1][0].location}</p>
            </div>
            <div className="flex-box">
              <Popup trigger={<Button> Employ</Button>}>
                <div>
                  {" "}
                  Sent! Will Notify Students in there Dashbaord/notifications
                  still working on this
                </div>
              </Popup>
              <Popup trigger={<Button> Rate</Button>}>
                <div> Sign in as a professor!</div>
              </Popup>
            </div>
          </div>
        </div>

        {/* TODO:: Links */}
        <div className="student-links">
          <img src={GlobeIcon} alt="website url" />
          <img src={GithubIcon} alt="github" />
          <img src={LinkedinIcon} alt="linkedin" />
          <img src={ResumeIcon} alt="resume-pdf" />
        </div>

        {/* Student About Me */}
        <div className="student-about">
          <div className="flex-box">
            <h4>About Me</h4>
          </div>
          {/* About Me */}
          <p>{userProfile[1][0].about_me}</p>
        </div>
        {/* Student Qualities */}
        <div className="student-qualities">
          <div className="flex-box">
            <h4>Top Qualities</h4>
          </div>
          {/* Maps Every Quality Stored For The Student */}
          <li>
            {String(
              userProfile[1].length == 0
                ? "No Qualtites"
                : userProfile[1][0].strengths_qualities
            )
              .split(",")
              .map((quality) => (
                <ul>{quality}</ul>
              ))}
          </li>
        </div>

        <div className="student-grid">
          {/* Student Projects */}
          <div className="projects">
            <div className="flex-box">
              <h4>Projects</h4>
            </div>
            {/* Maps Every Project Stored For The Student */}
            {userProfile[2].map((project) => (
              <div className="student-project flex-box">
                {/* Project Icon */}
                <div className="img-box">
                  <img src={ProjectIcon} alt="project icon" />
                </div>
                {/* Project Details */}
                <div className="right">
                  {/* TODO:: Project Date */}
                  <p id="date">November 20, 2020</p>
                  <div className="flex-box">
                    {/* Project Name */}
                    <h5>{project.project_name}</h5>
                  </div>
                  {/* Project Description */}
                  <p>{project.summary}</p>
                  <div className="flex-box">
                    {/* Project Collaborator(s) */}
                    <h6>Collaborator(s):</h6>
                    {String(project.arr_collaborators_arr)
                      .split(",")
                      .map((collaborator) => (
                        <h6>&nbsp;{collaborator}</h6>
                      ))}
                  </div>
                  {/* Project Professor */}
                  <h6>Professor: {project.professor}</h6>
                  <li>
                    {String(project.arr_tools_used)
                      .split(",")
                      .map((tool) => (
                        <ul style={{ backgroundColor: "#66D3D9" }}>{tool}</ul>
                      ))}
                  </li>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="education">
              {/* Student Education */}
              <div className="flex-box">
                <h4>Education</h4>
              </div>
              {/* Maps Every Education The Student Has Stored */}
              {userProfile[0].map((education) => (
                <div className="student-education flex-box">
                  {/* creates default image if none provided */}
                  <div className="img-box">
                    <img src={EducationIcon} alt="project icon" />
                  </div>
                  <div className="right">
                    <div className="flex-box">
                      {/* Education Degree Recieved */}
                      <h5>{education.degree}</h5>
                    </div>
                    {/* Education School Name */}
                    <h6>{education.school}</h6>
                    <p>GPA: {education.school_gpa}</p>
                    {/* Education Start - End Date (current or date) */}
                    <p>
                      {education.start_year} - {education.end_year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="experience">
              {/* experience */}
              <div className="flex-box">
                <h4>Experience</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Student's Ratings */}
        <div className="student-reflection">
          <h4>Ratings</h4>
          {/* Maps Every Review From Professor(s) to Student */}
          {userProfile[3].map((review) => (
            <div className="rating">
              <header className="flex-box">
                <span className="flex-box">
                  {/* Review: Professor Name */}
                  <h5>
                    {review.first_name} {review.last_name}
                  </h5>
                  {/* Sum of Review */}
                  <ProgressBar
                    now={review.rating_total}
                    label={`${review.rating_total}` + " / 5"}
                    min="0"
                    max="5"
                    variant="info"
                    style={{ width: "35%", marginTop: "5px" }}
                    id="progress-bar"
                  />
                </span>
                {/* TODO:: date of the review */}
                <p>November 20, 2021</p>
              </header>
              {/* Professor's School At The Time Of The Review */}
              <h6>{review.school_name}</h6>
              {/* Professor's Review */}
              <p>{review.recommendation_comment}</p>
              <li>
                <ul>
                  Commited To Success: {review.committed_to_success_level}
                </ul>
                <ul>Leadership: {review.leadership_level}</ul>
                <ul>Responsible: {review.responsible_level}</ul>
                <ul>Team Work: {review.team_work_level}</ul>
              </li>
            </div>
          ))}
        </div>
      </>
    );
  }

  if (cookie.Type_User === `professor`) {
    return (
      <>
        <Button onClick={() => RedirectStudentSearch()}>
          Go Back to Student Search
        </Button>
        <hr></hr>
        {/* heading */}
        <div className="student-heading">
          {/* creates default image if none provided */}
          <img
            src={
              userProfile[1][0].profile_image === null
                ? defaultImage("Student Name")
                : userProfile[1][0].profile_image
            }
            alt={"S"}
          />
          <div className="right">
            {/* Student Name */}
            <h1>
              {userProfile[4][0].first_name + ` ` + userProfile[4][0].last_name}
            </h1>

            {/* Student Location */}
            <div className="flex-box">
              <img src={LocationIcon} alt="location pin" />
              <p>{userProfile[1][0].location}</p>
            </div>
            <div className="flex-box">
              <Popup trigger={<Button>Employ</Button>}>
                <p>You must be a Employee! Sign In as an Employee</p>
              </Popup>

              <StyledPopup trigger={<Button> Rate</Button>}>
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
              </StyledPopup>
            </div>
          </div>
        </div>

        {/* TODO:: Links */}
        <div className="student-links">
          <img src={GlobeIcon} alt="website url" />
          <img src={GithubIcon} alt="github" />
          <img src={LinkedinIcon} alt="linkedin" />
          <img src={ResumeIcon} alt="resume-pdf" />
        </div>

        {/* Student About Me */}
        <div className="student-about">
          <div className="flex-box">
            <h4>About Me</h4>
          </div>
          {/* About Me */}
          <p>{userProfile[1][0].about_me}</p>
        </div>
        {/* Student Qualities */}
        <div className="student-qualities">
          <div className="flex-box">
            <h4>
              <b>Top Qualities</b>
            </h4>
          </div>
          {/* Maps Every Quality Stored For The Student */}
          <li>
            {String(
              userProfile[1].length == 0
                ? "No Qualtites"
                : userProfile[1][0].strengths_qualities
            )
              .split(",")
              .map((quality) => (
                <ul>{quality}</ul>
              ))}
          </li>
        </div>

        <div className="student-grid">
          {/* Student Projects */}
          <div className="projects">
            <div className="flex-box">
              <h4>Projects</h4>
            </div>
            {/* Maps Every Project Stored For The Student */}
            {userProfile[2].map((project) => (
              <div className="student-project flex-box">
                {/* Project Icon */}
                <div className="img-box">
                  <img src={ProjectIcon} alt="project icon" />
                </div>
                {/* Project Details */}
                <div className="right">
                  {/* TODO:: Project Date */}
                  <p id="date">November 20, 2020</p>
                  <div className="flex-box">
                    {/* Project Name */}
                    <h5>{project.project_name}</h5>
                  </div>
                  {/* Project Description */}
                  <p>{project.summary}</p>
                  <div className="flex-box">
                    {/* Project Collaborator(s) */}
                    <h6>Collaborator(s):</h6>
                    {String(project.arr_collaborators_arr)
                      .split(",")
                      .map((collaborator) => (
                        <h6>&nbsp;{collaborator}</h6>
                      ))}
                  </div>
                  {/* Project Professor */}
                  <h6>Professor: {project.professor}</h6>
                  <li>
                    {String(project.arr_tools_used)
                      .split(",")
                      .map((tool) => (
                        <ul style={{ backgroundColor: "#66D3D9" }}>{tool}</ul>
                      ))}
                  </li>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="education">
              {/* Student Education */}
              <div className="flex-box">
                <h4>Education</h4>
              </div>
              {/* Maps Every Education The Student Has Stored */}
              {userProfile[0].map((education) => (
                <div className="student-education flex-box">
                  {/* creates default image if none provided */}
                  <div className="img-box">
                    <img src={EducationIcon} alt="project icon" />
                  </div>
                  <div className="right">
                    <div className="flex-box">
                      {/* Education Degree Recieved */}
                      <h5>{education.degree}</h5>
                    </div>
                    {/* Education School Name */}
                    <h6>{education.school}</h6>
                    <p>GPA: {education.school_gpa}</p>
                    {/* Education Start - End Date (current or date) */}
                    <p>
                      {education.start_year} - {education.end_year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="experience">
              {/* experience */}
              <div className="flex-box">
                <h4>Experience</h4>
                {/* Add Experience Popup */}
              </div>
              {/* TODO:: Maps Every Experience The Student Has Stored */}
              <div className="student-experience flex-box">
                {/* creates default image if none provided */}
                <div className="img-box">
                  <img src={ExperienceIcon} alt="project icon" />
                </div>
                <div className="right">
                  <div className="flex-box">
                    <h5>Jelly Bean Packer</h5>
                  </div>
                  <h6>The Pickle Factory Inc.</h6>
                  <p>November 20, 2020 - Current</p>
                  <li>
                    <ul style={{ backgroundColor: "#EFE271" }}>one</ul>
                    <ul style={{ backgroundColor: "#EFE271" }}>two</ul>
                    <ul style={{ backgroundColor: "#EFE271" }}>three</ul>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Student's Ratings */}
        <div className="student-reflection">
          <h4>Ratings</h4>
          {/* Maps Every Review From Professor(s) to Student */}
          {userProfile[3].map((review) => (
            <div className="rating">
              <header className="flex-box">
                <span className="flex-box">
                  {/* Review: Professor Name */}
                  <h5>
                    {review.first_name} {review.last_name}
                  </h5>
                  {/* Sum of Review */}
                  <ProgressBar
                    now={review.rating_total}
                    label={`${review.rating_total}` + " / 5"}
                    min="0"
                    max="5"
                    variant="info"
                    style={{ width: "35%", marginTop: "5px" }}
                    id="progress-bar"
                  />
                </span>
                {/* TODO:: date of the review */}
                <p>November 20, 2021</p>
              </header>
              {/* Professor's School At The Time Of The Review */}
              <h6>{review.school_name}</h6>
              {/* Professor's Review */}
              <p>{review.recommendation_comment}</p>
              <li>
                <ul>
                  Commited To Success: {review.committed_to_success_level}
                </ul>
                <ul>Leadership: {review.leadership_level}</ul>
                <ul>Responsible: {review.responsible_level}</ul>
                <ul>Team Work: {review.team_work_level}</ul>
              </li>
            </div>
          ))}
        </div>
      </>
    );
  }

  //Normal User
  return (
    <>
      <Button onClick={() => RedirectStudentSearch()}>
        Go Back to Student Search
      </Button>
      <hr></hr>
      {/* heading */}
      <div className="student-heading">
        {/* creates default image if none provided */}
        <img
          src={
            userProfile[1][0].profile_image === null
              ? defaultImage("Student Name")
              : userProfile[1][0].profile_image
          }
          alt={"S"}
        />
        <div className="right">
          {/* Student Name */}
          <h1>
            {userProfile[4][0].first_name + ` ` + userProfile[4][0].last_name}
          </h1>

          {/* Student Location */}
          <div className="flex-box">
            <img src={LocationIcon} alt="location pin" />
            <p>{userProfile[1][0].location}</p>
          </div>
          <div className="flex-box">
            <Popup trigger={<Button>Employ</Button>}>
              <p>You must be an Employee! Sign In as an Employee</p>
            </Popup>
            <Popup trigger={<Button> Rate</Button>}>
              <div> Sign in as a professor!</div>
            </Popup>
          </div>
        </div>
      </div>

      {/* TODO:: Links */}
      <div className="student-links">
        <img src={GlobeIcon} alt="website url" />
        <img src={GithubIcon} alt="github" />
        <img src={LinkedinIcon} alt="linkedin" />
        <img src={ResumeIcon} alt="resume-pdf" />
      </div>

      {/* Student About Me */}
      <div className="student-about">
        <div className="flex-box">
          <h4>About Me</h4>
          {/* About Me Edit Popup */}
        </div>
        {/* About Me */}
        <p>{userProfile[1][0].about_me}</p>
      </div>
      {/* Student Qualities */}
      <div className="student-qualities">
        <div className="flex-box">
          <h4>Top Qualities</h4>
        </div>
        {/* Maps Every Quality Stored For The Student */}
        <li>
          {String(
            userProfile[1].length == 0
              ? "No Qualtites"
              : userProfile[1][0].strengths_qualities
          )
            .split(",")
            .map((quality) => (
              <ul>{quality}</ul>
            ))}
        </li>
      </div>

      <div className="student-grid">
        {/* Student Projects */}
        <div className="projects">
          <div className="flex-box">
            <h4>Projects</h4>
            {/* Add New Project Popup */}
          </div>
          {/* Maps Every Project Stored For The Student */}
          {userProfile[2].map((project) => (
            <div className="student-project flex-box">
              {/* Project Icon */}
              <div className="img-box">
                <img src={ProjectIcon} alt="project icon" />
              </div>
              {/* Project Details */}
              <div className="right">
                {/* TODO:: Project Date */}
                <p id="date">November 20, 2020</p>
                <div className="flex-box"></div>
                {/* Project Description */}
                <p>{project.summary}</p>
                <div className="flex-box">
                  {/* Project Collaborator(s) */}
                  <h6>Collaborator(s):</h6>
                  {String(project.arr_collaborators_arr)
                    .split(",")
                    .map((collaborator) => (
                      <h6>&nbsp;{collaborator}</h6>
                    ))}
                </div>
                {/* Project Professor */}
                <h6>Professor: {project.professor}</h6>
                <li>
                  {String(project.arr_tools_used)
                    .split(",")
                    .map((tool) => (
                      <ul style={{ backgroundColor: "#66D3D9" }}>{tool}</ul>
                    ))}
                </li>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="education">
            {/* Student Education */}
            <div className="flex-box">
              <h4>Education</h4>
            </div>
            {/* Maps Every Education The Student Has Stored */}
            {userProfile[0].map((education) => (
              <div className="student-education flex-box">
                {/* creates default image if none provided */}
                <div className="img-box">
                  <img src={EducationIcon} alt="project icon" />
                </div>
                <div className="right">
                  <div className="flex-box"></div>
                  {/* Education School Name */}
                  <h6>{education.school}</h6>
                  <p>GPA: {education.school_gpa}</p>
                  {/* Education Start - End Date (current or date) */}
                  <p>
                    {education.start_year} - {education.end_year}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="experience">
            {/* experience */}
            <div className="flex-box">
              <h4>Experience</h4>
            </div>
            {/* TODO:: Maps Every Experience The Student Has Stored */}
            <div className="student-experience flex-box">
              {/* creates default image if none provided */}
              <div className="img-box">
                <img src={ExperienceIcon} alt="project icon" />
              </div>
              <div className="right">
                <div className="flex-box">
                  <h5>Jelly Bean Packer</h5>
                </div>
                <h6>The Pickle Factory Inc.</h6>
                <p>November 20, 2020 - Current</p>
                <li>
                  <ul style={{ backgroundColor: "#EFE271" }}>one</ul>
                  <ul style={{ backgroundColor: "#EFE271" }}>two</ul>
                  <ul style={{ backgroundColor: "#EFE271" }}>three</ul>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Student's Ratings */}
      <div className="student-reflection">
        <h4>Ratings</h4>
        {/* Maps Every Review From Professor(s) to Student */}
        {userProfile[3].map((review) => (
          <div className="rating">
            <header className="flex-box">
              <span className="flex-box">
                {/* Review: Professor Name */}
                <h5>
                  {review.first_name} {review.last_name}
                </h5>
                {/* Sum of Review */}
                <ProgressBar
                  now={review.rating_total}
                  label={`${review.rating_total}` + " / 5"}
                  min="0"
                  max="5"
                  variant="info"
                  style={{ width: "35%", marginTop: "5px" }}
                  id="progress-bar"
                />
              </span>
              {/* TODO:: date of the review */}
              <p>November 20, 2021</p>
            </header>
            {/* Professor's School At The Time Of The Review */}
            <h6>{review.school_name}</h6>
            {/* Professor's Review */}
            <p>{review.recommendation_comment}</p>
            <li>
              <ul>Commited To Success: {review.committed_to_success_level}</ul>
              <ul>Leadership: {review.leadership_level}</ul>
              <ul>Responsible: {review.responsible_level}</ul>
              <ul>Team Work: {review.team_work_level}</ul>
            </li>
          </div>
        ))}
      </div>
    </>
  );
};

export default PublicStudentProfile;
