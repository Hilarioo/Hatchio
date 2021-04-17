/*
Author: Aaron S | Jose for formatting later i think
File: Full Student Profile
Functionality: Works with onClick from student search to access any full students view
*/
import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
//Api
import API_USER_GET_PROFILE from "../../../../models/user_profile";
const StudentProfile = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [userProfile, setuserProfile] = useState([
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
  ]);
  const EducationList = userProfile[0].map((data) => (
    <div>
      <p>School:{data.school}</p>
      <p>Degree:{data.degree}</p>
      <p>GPA:{data.school_gpa}</p>
      <p>Major:{data.study_major}</p>
    </div>
  ));
  const GeneralInfoList = userProfile[1].map((data) => (
    <div>
      <p>About Me: {data.about_me}</p>
      <p>Strengths and Qualities: {data.strengths_qualities}</p>
      <p>Location: {data.location}</p>
      <p>School Grade Level {data.school_grade_level}</p>
    </div>
  ));
  const ProjectsList = userProfile[2].map((data) => (
    <div>
      <p>Project Name: {data.project_name}</p>
      <p>Summary: {data.summary}</p>
      <p>Tools Used: {data.arr_tools_used}</p>
      <p>Proffesor Involved: {data.professor}</p>
      <p>Links & Websites: {data.links_website}</p>
    </div>
  ));
  const RatingsList = userProfile[3].map((data) => (
    <div>
      <p>Rated By Professor {data.first_name + data.last_name}</p>
      <p>Responsble Level {data.recommendation_comment}</p>
      <p>Leadership Level {data.leadership_level}</p>
      <p>Recommendation Comment: {data.recommendation_comment}</p>
      <b>There's more but i got lazy</b>
    </div>
  ));

  useEffect(() => {
    API_USER_GET_PROFILE("student", location.example, setuserProfile);
  }, [location]);

  const RedirectStudentSearch = () => {
    history.push("/search-candidates");
  };

  return (
    <>
      <h2>Sudent Profile</h2>
      <button onClick={() => RedirectStudentSearch()}>
        Go Back to Student Search
      </button>
      <hr></hr>

      <h4>Profile Information</h4>
      {GeneralInfoList}
      <hr></hr>
      <h4>Projects</h4>
      {ProjectsList}
      <hr></hr>
      <h4>Education</h4>
      {EducationList}
      <hr></hr>
      <h4>Ratings</h4>
      {RatingsList}

      <hr></hr>
    </>
  );
};

export default StudentProfile;
