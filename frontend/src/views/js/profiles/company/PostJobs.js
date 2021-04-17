import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
const PostJobs = () => {
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]); //Cur use

  if (cookie.Type_User === "employer") {
    return (
      <div>
        <p>Employer Insert Jobs</p>
        <p>Form Post</p>
        <p>SQL query to insert into job listings </p>
      </div>
    );
  }
  return (
    <div>
      <h3>Sign in as an Employer to Access this page</h3>
    </div>
  );
};

export default PostJobs;
