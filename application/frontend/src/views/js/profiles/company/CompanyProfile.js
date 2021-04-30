import { useState, useEffect } from "react";
import Collapsible from 'react-collapsible';

import API_REMOVE_JOB from "../../../../models/delete_job"
import API_FIND_CANDIDATE from "../../../../models/GET/Students/student_info";
//import API_UPDATE_CANDIDATE from ""; PUT

const CompanyProfile = (props) => {
  const [activeComponent, setactiveComponent] = useState(0);
  const [userProfilee, setuserProfilee] = useState([
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    {null:"null"},
  ]);

  const [studentInformation, setstudentInformation] = useState([
    [{null:"null"}, {null: "null"}],
    {null:"null"},
  ]);

  const removeJob = async (listing_id) => {
    const response = await API_REMOVE_JOB(listing_id);
    if(response.status === 400) console.log("Failed to update");
    if(response.status === 200) console.log("Success"); window.location.reload();
  };

  const findCandidates = async (student_id) => {
    const response = await API_FIND_CANDIDATE(student_id);
    if(response.status === 400) console.log("Failed to update");
    if(response.status === 200) console.log("Success"); console.log(response);
  };

  const assignment = (listing_id) =>{
    console.log("list:"+listing_id);
    setactiveComponent(listing_id);
    console.log("active");
    //console.log(activeComponent);
  };

  function converter(dataitem){
    if(dataitem){
      var t = dataitem.split(/[- : T]/);
      var d = new Date(Date.UTC(t[0],t[1]-1,t[2],t[3],t[4]));
      d = d.toString().split(' ');
      return d[1]+" "+d[2]+", "+d[3];
    }
  }
  const Employer_Information = userProfilee[0].map((data) => (
    <div>
      <p>Name: {data.first_name + data.last_name}</p>
      <p>Organization: {data.organization_name}</p>
      <p>Email: {data.email}</p>
    </div>
  ));

  var Employer_Jobs_Openings = userProfilee[1].map((data) => (
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

  var Employer_Find_Candidates = userProfilee[2].map((data) => (
    <div>
        {data.hidden === 0 && activeComponent === data.listing_id &&
        <>
          <p><strong>Alert</strong>: {data.compalert_id}</p>
          <p>Notified {converter(data.time)}</p>
          <p><strong>Candidate: </strong></p>
          <p><strong>School: </strong></p>
          <p><strong>Major: </strong></p>
          <p><strong>School Year: </strong></p>
          <button>Hide</button>
          <br></br>
          <br></br>
        </>
        }
    </div>
  ));

  useEffect(() => {
    setuserProfilee(props);
  }, [props]);

  if(window.location.pathname === '/notifications'){
    Employer_Jobs_Openings = userProfilee[1].map((data) => (
     <div>
       <Collapsible trigger={data.position_title+" #"+data.listing_id} onOpen={()=>assignment(data.listing_id)}
        onClose={()=>assignment(0)}>
         <div>
           <p>Location: {data.location}</p>
           <p>Job Type: {data.job_type}</p>
           <p>Experience Years: {data.experience_years}</p>
           <p>Salary: {data.salary}</p>
           <p>Skillset : {data.skillset}</p>
           <p>Task Responsibilites: {data.task_responsibilities}</p>
           <p>The Opportunity: {data.the_opportunity}</p>
         </div>
       </Collapsible>
       <button onClick={() => removeJob(data.listing_id)}>DELETE</button>
     </div>
   ));

   return (
    <div>
      {Employer_Jobs_Openings}
      <h3>Candidates Found</h3>
      {Employer_Find_Candidates}
    </div>
  );
 }

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
