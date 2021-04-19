import { useState, useEffect } from "react";
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
import EditIcon from "../../../content/svg/edit-icon.svg";
import AddIcon from "../../../content/svg/add-icon.svg";
import ProjectIcon from "../../../content/svg/project-icon.svg";
import ExperienceIcon from "../../../content/svg/experience-icon.svg";
import EducationIcon from "../../../content/svg/education-icon.svg";
// Form Components
import Popup from "reactjs-popup";
import { Formik, Field, Form } from "formik";
import AboutPopup from "../../forms/Description";
import ListPopup from "../../forms/List";
import ProjectPopup from "../../forms/Project";
import EducationPopup from "../../forms/Education";
import ExperiencePopup from "../../forms/Experience";
//Import API
import API_STUDENT_INSERT_PROFILE from "../../../../models/insert_student_profile";
import API_STUDENT_INSERT_EDUCATION from "../../../../models/insert_student_education";
import API_STUDENT_INSERT_PROJECTS from "../../../../models/insert_student_projects";
// Default Image
import { defaultImage } from "../../global/DefaultImage";

//Form
const StyledPopup = styled(Popup)`
  &-content[role="tooltip"] {
    font-size: 15px;
    height: 100%;
    width: 100%;
    background-color: pink;
    text-color: white;
    text-align: center;
  }
`;

//POP UP Profile Page Insert
const POPUP_STUDENT_PROFILE_PAGE = (Student_ID) => {
  return (
    <div>
      <StyledPopup trigger={<button> Profile Page Insert</button>}>
        <Formik
          initialValues={{
            Student_ID: Student_ID,
            about_me: "about me",
            strengths_qualities: "honest,strong",
            location: "Location",
            school_grade_level: "Freshman,etc",
            //TODO: RESUME
            //TODO: PROFILE IMAGE
          }}
          onSubmit={async (values) => {
            console.log(values);
            const response = await API_STUDENT_INSERT_PROFILE(values);
            console.log(response);
            if (response == 400) {
              console.log("error");
            }
            if (response == 200) {
              window.location.reload();
              console.log("success");
            }
            return;
          }}
        >
          <Form>
            <br></br>
            <label>___________________________________________About Me</label>
            <Field id="about_me" name="about_me" />
            <hr></hr>

            <br></br>
            <label>
              ________________________________________Strenth Qualities
            </label>
            <Field id="strengths_qualities" name="strengths_qualities" />

            <hr></hr>
            <label>_____________________________________Location</label>
            <Field id="location" name="location" />

            <hr></hr>
            <label>
              ________________________________________School Grade Level
            </label>
            <Field id="school_grade_level" name="school_grade_level" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </StyledPopup>
    </div>
  );
};
//POP UP Student Education
const POPUP_STUDENT_EDUCATION = (Student_ID) => {
  return (
    <div>
      <StyledPopup trigger={<button> Student Education Insert</button>}>
        <Formik
          initialValues={{
            Student_ID: Student_ID,
            school: "School Name",
            degree: "Degree Name",
            school_gpa: 0,
            study_major: "Computer Science or Art or",
            start_year: 10,
            end_year: 15,
          }}
          onSubmit={async (values) => {
            console.log(values);
            const response = await API_STUDENT_INSERT_EDUCATION(values);
            console.log(response);
            if (response == 400) {
              console.log("error");
            }
            if (response == 200) {
              window.location.reload();
              console.log("success");
            }
            return;
          }}
        >
          <Form>
            <label> School Name</label>
            <Field id="school" name="school" />
            <label> Degree</label>
            <Field id="degree" name="degree" />
            <label> School GPA</label>
            <Field id="school_gpa" name="school_gpa" />
            <label> Study Major</label>
            <Field id="study_major" name="study_major" />
            <label> Start Year</label>
            <Field id="start_year" name="start_year" />
            <label> End Year</label>
            <Field id="end_year" name="end_year" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </StyledPopup>
    </div>
  );
};
//POP UP Student Projects
const POPUP_STUDENT_PROJECTS = (Student_ID) => {
  return (
    <div>
      <StyledPopup trigger={<button> Insert Projects</button>}>
        <Formik
          initialValues={{
            Student_ID: Student_ID,
            project_name: "Project Name",
            summary: "Summary",
            professor: "professors name",
            arr_tools_used: "c++,java,etcs",
            links_website: "links_webiste",
            arr_collaborators_arr: "collarborates",
          }}
          onSubmit={async (values) => {
            console.log(values);
            const response = await API_STUDENT_INSERT_PROJECTS(values);
            console.log(response);
            if (response == 400) {
              console.log("error");
            }
            if (response == 200) {
              window.location.reload();
              console.log("success");
            }
            return;
          }}
        >
          <Form>
            <label> Projecct Name</label>
            <Field id="project_name" name="project_name" />
            <label> Summary</label>
            <Field id="summary" name="summary" />
            <label> Professors</label>
            <Field id="professor" name="professor" />
            <label> Array of Tools</label>
            <Field id="arr_tools_used" name="arr_tools_used" />
            <label> Links & Websites</label>
            <Field id="links_website" name="links_website" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </StyledPopup>
    </div>
  );
};

const StudentProfile = (props) => {
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]);

  //Transferred User Profile State
  const [userProfile, setUserProfile] = useState([
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
  ]);

  useEffect(() => {
    setUserProfile(props);
  }, [props]);

  // Form States
  const [aboutPopup, setAboutPopup] = useState(false);
  const [listPopup, setListPopup] = useState(false);
  const [projectPopup, setProjectPopup] = useState(false);
  const [educationPopup, setEducationPopup] = useState(false);
  const [experiencePopup, setExperiencePopup] = useState(false);

  return (
    <>
      <h1>
        IF THE FORMS DONT REFRESH, THERES AN ISSUE WITH THE INPUT, KEEP TRYING
        UNTIL IT REFRESHES AND DONT USE THE EDIT OR ADD BUTTON
      </h1>
      {/* heading */}
      <div className="student-heading">
        {/* creates default image if none provided */}
        <img
          src={
            (userProfile[1].length == 0) | (userProfile[0].length == 0)
              ? defaultImage("Student Name")
              : userProfile[1][0].profile_image === null
              ? defaultImage("Student Name")
              : userProfile[1][0].profile_image
          }
          alt={"S"}
        />
        <div className="right">
          {/* Student Name */}
          <h1>
            {userProfile[4][0].first_name + `` + userProfile[4][0].last_name}
          </h1>

          {/* Student Location */}
          <div className="flex-box">
            <img src={LocationIcon} alt="location pin" />
            <p>
              {userProfile[1].length == 0
                ? "Location Not Provided"
                : userProfile[1][0].location}
            </p>
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
          <img
            id="edit-button"
            src={EditIcon}
            alt="edit pencil button"
            onClick={() => setAboutPopup(true)}
          />
          <AboutPopup
            show={aboutPopup}
            onHide={() => setAboutPopup(false)}
            heading="Edit About Me"
            about={
              userProfile[1].length == 0
                ? "About Me Not Provided"
                : userProfile[1][0].about_me
            }
          />
        </div>
        {/* About Me */}
        <p>
          {userProfile[1].length == 0
            ? POPUP_STUDENT_PROFILE_PAGE(cookie.ID_OF_USER)
            : userProfile[1][0].about_me}
        </p>
      </div>

      {/* Student Qualities */}
      <div className="student-qualities">
        <div className="flex-box">
          <h4>Top Qualities</h4>
          {/* Qualities Edit Popup */}
          <img
            id="edit-button"
            src={EditIcon}
            alt="edit pencil button"
            onClick={() => setListPopup(true)}
          />
          <ListPopup show={listPopup} onHide={() => setListPopup(false)} />
        </div>
        {/* Maps Every Quality Stored For The Student */}
        <li>
          {userProfile[1].length == 0
            ? "Add in Insert Profile Page"
            : String(userProfile[1][0].strengths_qualities)
                .split(",")
                .map((quality) => <ul>{quality}</ul>)}
        </li>
      </div>

      <div className="student-grid">
        {/* Student Projects */}
        <div className="projects">
          <div className="flex-box">
            <h4>Projects</h4>
            {/* Add New Project Popup */}
            <img
              id="edit-button"
              src={AddIcon}
              alt="edit pencil button"
              onClick={() => setProjectPopup(true)}
            />
            <ProjectPopup
              show={projectPopup}
              onHide={() => setProjectPopup(false)}
            />
          </div>
          {/* Maps Every Project Stored For The Student */}
          {userProfile[2].length == 0
            ? "No Projects Found"
            : userProfile[2].map((project) => (
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
                      {/* Edit Project Popup */}
                      <img
                        id="edit-button"
                        src={EditIcon}
                        alt="edit pencil button"
                        onClick={() => setProjectPopup(true)}
                      />
                      <ProjectPopup
                        show={projectPopup}
                        onHide={() => setProjectPopup(false)}
                      />
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
          {POPUP_STUDENT_PROJECTS(cookie.ID_OF_USER)}
        </div>

        <div>
          <div className="education">
            {/* Student Education */}
            <div className="flex-box">
              <h4>Education</h4>
              {/* Add Education Popup */}
              <img
                id="edit-button"
                src={AddIcon}
                alt="edit pencil button"
                onClick={() => setEducationPopup(true)}
              />
              <EducationPopup
                show={educationPopup}
                onHide={() => setEducationPopup(false)}
              />
            </div>
            {/* Maps Every Education The Student Has Stored */}
            {userProfile[0].length == 0
              ? "No Education Found"
              : userProfile[0].map((education) => (
                  <div className="student-education flex-box">
                    {/* creates default image if none provided */}
                    <div className="img-box">
                      <img src={EducationIcon} alt="project icon" />
                    </div>
                    <div className="right">
                      <div className="flex-box">
                        {/* Education Degree Recieved */}
                        <h5>{education.degree}</h5>
                        {/* Edit Education Popup */}
                        <img
                          id="edit-button"
                          src={EditIcon}
                          alt="edit pencil button"
                          onClick={() => setEducationPopup(true)}
                        />
                        <EducationPopup
                          show={educationPopup}
                          onHide={() => setEducationPopup(false)}
                        />
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
            {POPUP_STUDENT_EDUCATION(cookie.ID_OF_USER)}
          </div>
          <div className="experience">
            {/* experience */}
            <div className="flex-box">
              <h4>Experience</h4>
              {/* Add Experience Popup */}
              <img
                id="edit-button"
                src={AddIcon}
                alt="edit pencil button"
                onClick={() => setExperiencePopup(true)}
              />
              <ExperiencePopup
                show={experiencePopup}
                onHide={() => setExperiencePopup(false)}
              />
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
                  {/* Edit Pencil --> Popup */}
                  <img
                    id="edit-button"
                    src={EditIcon}
                    alt="edit pencil button"
                    onClick={() => setExperiencePopup(true)}
                  />
                  <ExperiencePopup
                    show={experiencePopup}
                    onHide={() => setExperiencePopup(false)}
                  />
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
        {userProfile[3].length == 0
          ? "No Reflections Yet"
          : userProfile[3].map((review) => (
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
};

export default StudentProfile;
