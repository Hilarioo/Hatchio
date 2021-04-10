import "../../../css/Profiles.css";
import { useState, useEffect } from "react";
// Default Image
import { defaultImage } from "../../global/DefaultImage";
import { useCookies } from "react-cookie";
import API_USER_GET_PROFILE from "../../../../models/user_profile";
const StudentProfile = ({
  // default props provided if empty
  image = "",
  studentName = "Jose Gonzalez Martinez",
  location = "Pleasant Hill, CA",
  rating = "no ratings yet",
  links = ["web", "gtihub", "linkedin", "pdf"],
  about = "This is something about me",
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
}) => {
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]);
  const [userProfile, setuserProfile] = useState([]);
  const FETCH_USER_INFO = () => {
    API_USER_GET_PROFILE(
      setuserProfile,
      cookie.Type_User,
      cookie.ID_OF_USER,
      cookie.First_Name
    );
    console.log(userProfile);
  };
  useEffect(() => {
    console.log("useEffect trigger");
  }, []);

  return (
    <>
      {/* heading */}
      <div className="student-heading">
        <button onClick={FETCH_USER_INFO}>Get User Info</button>
        {/* creates default image if none provided */}
        <img
          src={image.length <= 0 ? defaultImage(studentName) : image}
          alt={studentName.charAt(0)}
        />
        <div className="right">
          <h1>{studentName}</h1>
          <p>{location}</p>
          <button>message</button>
          <button>reflection</button>
        </div>
      </div>
      {/* links */}
      <div className="student-links">
        <img src="" alt="website url" />
        <img src="" alt="linkedin" />
        <img src="" alt="resume-pdf" />
      </div>
      {/* about */}
      <h3>About</h3>
      <p>{about}</p>
      {/* qualities */}
      <h3>Top Qualities</h3>

      <li>
        {qualities.map((quality) => (
          <ul>{quality}</ul>
        ))}
        <ul>strength</ul>
      </li>
      <div class="grid-container-profile">
        <div class="projects">
          {/* projects */}
          <h3>Projects</h3>
          <div className="student-project">
            <img src="" alt="project img" />
            <div className="right">
              <p>date</p>
              <h5>project name </h5>
              <h6>author(s): </h6>
              <h6>Professor: </h6>
              <li>
                <ul>one</ul>
              </li>
            </div>
          </div>
        </div>
        <div class="education">
          {/* education */}
          <h3>Education</h3>
          <div className="student-education">
            <img src="" alt="education img" />
            <div className="right">
              <h5>degree title: </h5>
              <h6>school </h6>
              <p>date </p>
            </div>
          </div>
        </div>
        <div class="experience">
          {/* experience */}
          <h3>Experience</h3>
          <div className="student-experience">
            <img src="" alt="experience img" />
            <div className="right">
              <h5>job title</h5>
              <h6>company </h6>
              <p>date </p>
              <li>
                <ul>one</ul>
              </li>
            </div>
          </div>
        </div>
      </div>
      {/* reflection */}
      <h3>Reflection</h3>
      <div className="review-heading">
        <p>score </p>
        <p>user</p>
        <p>date</p>
      </div>
      <h6>school</h6>
      <p>Recommendation:</p>
      <li>
        <ul>one</ul>
      </li>
    </>
  );
};

export default StudentProfile;
