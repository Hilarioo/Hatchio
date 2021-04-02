import { useState, useEffect } from "react";
// CSS
import "../../../css/Theme.css";
import "../../../css/Search.css";
// Componenets
import StudentFilters from "./StudentFilters";
import StudentCard from "./StudentCard";
import StudentSearchBar from "./StudentSearchBar";
//API
import api_fetch_students from "../../../../models/student_cards";

const StudentSearch = () => {
  const [dbStudents, setdbStudents] = useState([]);
  useEffect(() => api_fetch_students(setdbStudents), []);
  return (
    <>
      <div class="grid-container">
        <StudentSearchBar />
        <StudentFilters />
        <div class="results">
          {dbStudents.map((student) => (
            <StudentCard
              // image={student.profile_image == null ? `""` : student.profile_image}
              image={""}
              studentName={student.first_name + " " + student.last_name}
              major={student.study_major}
              rating={student.rating_total}
              gpa={student.school_gpa}
              schoolName={student.school}
              year={student.start_year}
              about={student.about_me}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentSearch;
