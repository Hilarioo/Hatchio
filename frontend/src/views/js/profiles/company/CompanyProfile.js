import { useState, useEffect } from "react";
const CompanyProfile = (props) => {
  const [profileState, setProfileState] = useState([]);
  useEffect(() => {
    setProfileState(props);
  }, [props]);
  return (
    <div>
      <p>Employer</p>
      {/** Passed in profileState from dashboard.js */}
      {JSON.stringify(profileState)}
    </div>
  );
};

export default CompanyProfile;
