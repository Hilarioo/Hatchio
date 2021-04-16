import { useState, useEffect } from "react";
// CSS
import "../../../css/Profiles.css";
import "../../../css/Theme.css";
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
import AboutPopup from "../../forms/Description";
import ListPopup from "../../forms/List";
import ProjectPopup from "../../forms/Project";
import EducationPopup from "../../forms/Education";
import ExperiencePopup from "../../forms/Experience";
// Default Image
import { defaultImage } from "../../global/DefaultImage";

const StudentProfile = (
  props, //Passed in userProfile state from Dashboard.js
  {
    // default props provided if empty
    image = "",
    studentName = "Jose Gonzalez Martinez",
    location = "Pleasant Hill, CA",
    rating = 3,
    links = ["web", "gtihub", "linkedin", "pdf"],
    about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    qualities = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
    ],
    projects = [
      {
        rating: 4,
        user: "user00",
        date: "November 12, 2020",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
      {
        rating: 2,
        user: "user30",
        date: "November 12, 1920",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      },
    ],
    education = [
      {
        degree: "BS Computer Science",
        school: "San Francisco State University",
        start: "November 01, 9109",
        end: "present",
      },
      {
        degree: "BS Procrastination",
        school: "San Francisco State University",
        start: "November 01, 1920",
        end: "December 01, 2000",
      },
    ],
    experience = [
      {
        position: "Jelly Bean Packager",
        company: "The Pickle Factory Inc.",
        start: "November 01, 1920",
        end: "December 01, 2000",
        tags: ["one", "two", "three"],
      },
    ],
    reflections = [
      {
        rating: 4,
        reviewer: "Professor User Name",
        date: "November 23, 2020",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        tags: ["one", "two", "three"],
      },
    ],
  }
) => {
  //Get Profile State
  const [profileState, setProfileState] = useState([]);
  useEffect(() => {
    setProfileState(props);
  }, [props]);

  // Form States
  const [aboutPopup, setAboutPopup] = useState(false);
  const [listPopup, setListPopup] = useState(false);
  const [projectPopup, setProjectPopup] = useState(false);
  const [educationPopup, setEducationPopup] = useState(false);
  const [experiencePopup, setExperiencePopup] = useState(false);

  return (
    <>
      {/* Passed In State from Dashboard.js */}
      {JSON.stringify(profileState)}
      {/* heading */}
      <div className="student-heading">
        {/* creates default image if none provided */}
        <img
          src={image.length <= 0 ? defaultImage(studentName) : image}
          alt={studentName.charAt(0)}
        />
        <div className="right">
          <h1>{studentName}</h1>
          <div className="flex-box">
            <img src={LocationIcon} alt="location pins" />
            <p>{location}</p>
          </div>
          <div className="flex-box">
            <Button>Message</Button>
            <Button id="reflection">Rate</Button>
          </div>
        </div>
      </div>
      {/* links */}
      <div className="student-links">
        <img src={GlobeIcon} alt="website url" />
        <img src={GithubIcon} alt="github" />
        <img src={LinkedinIcon} alt="linkedin" />
        <img src={ResumeIcon} alt="resume-pdf" />
      </div>
      {/* about */}
      <div className="student-about">
        <div className="flex-box">
          <h4>About Me</h4>
          {/* Edit Pencil --> Popup */}
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
            about={about}
          />
        </div>
        <p>{about}</p>
      </div>
      {/* qualities */}
      <div className="student-qualities">
        <div className="flex-box">
          <h4>Top Qualities</h4>
          {/* Edit Pencil --> Popup */}
          <img
            id="edit-button"
            src={EditIcon}
            alt="edit pencil button"
            onClick={() => setListPopup(true)}
          />
          <ListPopup show={listPopup} onHide={() => setListPopup(false)} />
        </div>
        <li>
          {qualities.map((quality) => (
            <ul>{quality}</ul>
          ))}
          <ul>strength</ul>
        </li>
      </div>
      <div className="student-grid">
        <div className="projects">
          {/* projects */}
          <div className="flex-box">
            <h4>Projects</h4>
            {/* Edit Pencil --> Popup */}
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
          <div className="student-project flex-box">
            {/* creates default image if none provided */}
            <div className="img-box">
              <img src={ProjectIcon} alt="project icon" />
            </div>
            <div className="right">
              <p id="date">November 20, 2020</p>
              <div className="flex-box">
                <h5>Pac-Man Python Project</h5>
                {/* Edit Pencil --> Popup */}
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
              <h6>Collaborator(s): </h6>
              <h6>Professor: </h6>
              <li>
                <ul style={{ backgroundColor: "#66D3D9" }}>one</ul>
                <ul style={{ backgroundColor: "#66D3D9" }}>two</ul>
                <ul style={{ backgroundColor: "#66D3D9" }}>three</ul>
              </li>
            </div>
          </div>
        </div>
        <div>
          <div className="education">
            {/* education */}
            <div className="flex-box">
              <h5>Education</h5>
              {/* Edit Pencil --> Popup */}
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
            <div className="student-education flex-box">
              {/* creates default image if none provided */}
              <div className="img-box">
                <img src={EducationIcon} alt="project icon" />
              </div>
              <div className="right">
                <div className="flex-box">
                  <h5>BS Computer Science</h5>
                  {/* Edit Pencil --> Popup */}
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
                <h6>San Francisco State University</h6>
                <p>November 13, 2021 - Current</p>
              </div>
            </div>
          </div>
          <div className="experience">
            {/* experience */}
            <div className="flex-box">
              <h4>Experience</h4>
              {/* Edit Pencil --> Popup */}
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
      <div className="student-reflection">
        {/* reflection */}
        <h4>Ratings</h4>
        <div className="rating">
          <header className="flex-box">
            <span className="flex-box">
              <h5>Henry Villar</h5>
              <ProgressBar
                now={rating}
                label={`${rating}` + " / 5"}
                min="0"
                max="5"
                variant="info"
                style={{ width: "35%", marginTop: "5px" }}
                id="progress-bar"
              />
            </span>
            <p>November 20, 2021</p>
          </header>
          <h6>San Francisco State University</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <li>
            <ul>one</ul>
            <ul>two </ul>
            <ul>three</ul>
          </li>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
