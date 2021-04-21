import { useState, useEffect } from "react";
const CompanyProfile = (props) => {
  const [userProfilee, setuserProfilee] = useState([
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
  ]);

  const Employer_Information = userProfilee[0].map((data) => (
    <div>
      <p>Name: {data.first_name + data.last_name}</p>
      <p>Organization: {data.organization_name}</p>
      <p>Email: {data.email}</p>
    </div>
  ));

  const Employer_Jobs_Openings = userProfilee[1].map((data) => (
    <div>
      <p>Job Title: {data.position_title} </p>
      <p>Location: {data.location}</p>
      <p>Job Type: {data.job_type}</p>
      <p>Experience Years: {data.experience_years}</p>
      <p>Salary: {data.salary}</p>
      <p>Skillset : {data.skillset}</p>
      <p>Task Responsibilites: {data.task_responsibilities}</p>
      <p>The Opportunity: {data.the_opportunity}</p>
    </div>
  ));

  useEffect(() => {
    setuserProfilee(props);
  }, [props]);
  return (
    <div>
      <h3>Employer Information</h3>
      {Employer_Information}
      <h3>Employer Jobs Made</h3>
      {Employer_Jobs_Openings}
    </div>
  );
};

export default CompanyProfile;
