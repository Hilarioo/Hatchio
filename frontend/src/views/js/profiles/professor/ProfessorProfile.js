import { useEffect, useState } from "react";

const ProfessorProfile = (props) => {
  const [profileState, setProfileState] = useState([]);
  useEffect(() => {
    setProfileState(props);
  }, [props]);

  const USER_LOG = () => {
    console.log(profileState[0]); //General Information
    //second table might be profile page
  };

  return (
    <div>
      {/* for debugging purposes */}
      <button onClick={USER_LOG}>Log Information Inside Profile</button>
      {JSON.stringify(profileState)}
    </div>
  );
};

export default ProfessorProfile;
