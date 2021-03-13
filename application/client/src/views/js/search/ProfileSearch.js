import { useState } from "react";
import { port_host } from "../../../config.js";
const ProfileSearch = () => {
  const [keyword, setKeyword] = useState(""); //Keyword
  const [dbResults, setdbResults] = useState([]); //DataBase Results
  const DB_Search = () => {
    fetch(`${port_host}/search/profiles?keyword=${keyword}`)
      .then((response) => response.json())
      .then((json) => {
        setdbResults(json);
        console.log(json);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setdbResults([]);
    DB_Search();
  };

  return (
    <div>
      <p>You can search for any of the following:</p>
      <ul>
        <li>mark</li>
        <li>students</li>
        <li>employers</li>
        <li>professors</li>
        <li>california</li>
        <li>san francisco state university</li>
        <li>Apple </li>
        <li>Senior Full Stack Developer </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Keyword Search</label>
          <input type="text" id="keyword" onChange={(e) => setKeyword(e.target.value)} />
        </div>
        <button type="submit">Search DB</button>
      </form>
      <hr></hr>
      <h3>Results</h3>
      {JSON.stringify(dbResults)}
    </div>
  );
};

export default ProfileSearch;
