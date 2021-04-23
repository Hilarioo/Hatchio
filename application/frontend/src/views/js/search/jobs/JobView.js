// React
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
// React Boostrap
import Button from "react-bootstrap/Button";
const JobView = (props) => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.Listing_id == undefined) {
      console.log("Not From Click View");
    } else {
      console.log("over here");
      console.log(location.Listing_id); //select all information where listing_id
      //API
      //SET Information
      //Render View
    }
  }, [location]);
  const RedirectJobSearch = () => {
    history.push("/search-jobs");
  };
  return (
    <div>
      <h3>Job View</h3> <p>Job View Details</p>
      <Button onClick={() => RedirectJobSearch()}>Back to Job Search</Button>
    </div>
  );
};

export default JobView;
