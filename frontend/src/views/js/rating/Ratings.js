import { useState, useEffect } from "react";
//Components
import StudentCard from "./RatingCard.js";
//import API
import API_FETCH_STUDENT from "../../../models/student_cards";
// CSS
import "../../css/Theme.css";
import "../../css/Search.css";
const Ratings = () => {
  const [dbStudents, setdbStudents] = useState([]);
  useEffect(() => API_FETCH_STUDENT(setdbStudents, []));
  return (
    <div>
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
            student_enrollment={student.school_grade_level}
          />
        ))}
      </div>
    </div>
  );
};

export default Ratings;
