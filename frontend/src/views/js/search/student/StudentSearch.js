import { useState, useEffect } from "react";
// CSS
import "../../../css/Theme.css";
import "../../../css/Search.css";
// Componenets
import StudentFilters from "./StudentFilters";
import StudentCard from "./StudentCard";
import StudentSearchBar from "./StudentSearchBar";
//API
import API_FETCH_STUDENTS from "../../../../models/student_cards";

const StudentSearch = () => {
  // All students fetched from DB
  const [dbStudents, setdbStudents] = useState([
    {
      about_me: "null",
      first_name: "null",
      last_name: "null",
      profile_image: null,
      school: "null",
      school_gpa: 0,
      school_grade_level: "null",
      start_year: 0,
      strengths_qualities: "0",
      student_id: 0,
      study_major: "null",
    },
  ]);
  const [results, setResults] = useState([
    {
      about_me: "null",
      first_name: "null",
      last_name: "null",
      profile_image: null,
      school: "null",
      school_gpa: 0,
      school_grade_level: "null",
      start_year: 0,
      strengths_qualities: "0",
      student_id: 0,
      study_major: "null",
    },
  ]); // holds filtered students (avoids having to fetch from DB again)
  const [activeFilters, setActiveFilters] = useState([]); // Active filters
  const [schoolYear, setSchoolYear] = useState([]); // Active school year(s)
  const [strength, setStrength] = useState("");
  const [gpa, setGPA] = useState({ min: 0, max: 4 });
  const [rating, setRating] = useState({ min: 0, max: 5 });
  const [keyword, setKeyword] = useState(""); // Search Bar Keyword storing

  // fetch students from DB && initialize the results
  useEffect(async () => {
    const Student_Database = await API_FETCH_STUDENTS();
    setdbStudents(Student_Database);
    setResults(Student_Database);
    console.log(dbStudents);
  }, []);

  //filter dbStudents based on the keyword entered
  const keywordFilterHandler = (e) => {
    e.preventDefault(); // prevent refresh
    setResults(dbStudents); // resets results to have the entire students DB

    // filters results based on the input (ONLY if input is not blank)
    if (keyword !== "") {
      setResults(
        results.filter((student) => {
          return (
            student.first_name.toLowerCase().indexOf(keyword.toLowerCase()) !==
              -1 ||
            student.last_name.toLowerCase().indexOf(keyword.toLowerCase()) !==
              -1 ||
            student.study_major.toLowerCase().indexOf(keyword.toLowerCase()) !==
              -1 ||
            student.school.toLowerCase().indexOf(keyword.toLowerCase()) !==
              -1 ||
            student.school_grade_level
              .toLowerCase()
              .indexOf(keyword.toLowerCase()) !== -1
          );
        })
      );
    }
  };

  // Updates school year(s) list
  const addSchoolYearHandler = (e) => {
    // School Year FILTER
    if (e.target.checked) {
      setSchoolYear((activeFilters) => [...schoolYear, e.target.value]);
      // Updates results (adds school year)
      setResults(
        results.filter((student) => {
          return (
            student.school_grade_level
              .toLowerCase()
              .indexOf(e.target.value.toLowerCase()) !== -1
          );
        })
      );
    } else {
      setSchoolYear(schoolYear.filter((filter) => filter !== e.target.value));
      // Updates results (removes school year)
      setResults(dbStudents);
    }
  };

  // Updates active filters
  const addFilterHandler = (e) => {
    // Strengths FILTER

    // Area of Study FILTER
    if (e.target.name === "degree") {
      // Adds to active filters

      setActiveFilters((activeFilters) => [...activeFilters, e.target.value]);
      // Updates results
      setResults(
        results.filter((student) => {
          return (
            student.study_major
              .toLowerCase()
              .indexOf(e.target.value.toLowerCase()) !== -1
          );
        })
      );
    }

    // GPA FILTER
    if (e.target.name === "gpa") {
      // checks input bounds
      if (parseInt(gpa.max) > 4) setGPA({ ...gpa, max: 4 });
      if (parseInt(gpa.min) < 0) setGPA({ ...gpa, min: 0 });

      // Adds to active filters
      setActiveFilters((activeFilters) => [
        ...activeFilters,
        "GPA: " + gpa.min + " - " + gpa.max,
      ]);
      // Updates results
      setResults(
        results.filter((student) => {
          return student.school_gpa <= gpa.max && student.school_gpa >= gpa.min;
        })
      );
    }

    // Ratings FILTER
    if (e.target.name === "rating") {
      // checks input bounds
      if (parseInt(rating.max) > 5) setRating({ ...rating, max: 5 });
      if (parseInt(rating.min) < 0) setRating({ ...rating, min: 0 });

      // Adds to active filters
      setActiveFilters((activeFilters) => [
        ...activeFilters,
        "Rating: " + rating.min + " - " + rating.max,
      ]);
      // Updates results
      setResults(
        results.filter((student) => {
          return (
            student.rating_total <= rating.max &&
            student.rating_total >= rating.min
          );
        })
      );
    }
  };

  return (
    <>
      <div className="grid-container">
        <StudentSearchBar
          keywordFilterHandler={keywordFilterHandler}
          setKeyword={setKeyword}
        />
        <StudentFilters
          // functions
          addFilterHandler={addFilterHandler}
          addSchoolYearHandler={addSchoolYearHandler}
          // Active filters
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          // School year
          schoolYear={schoolYear}
          setSchoolYear={setSchoolYear}
          // Strengths
          strength={strength}
          setStrength={setStrength}
          // GPA
          gpa={gpa}
          setGPA={setGPA}
          // Rating
          rating={rating}
          setRating={setRating}
        />
        <div className="results">
          {results.map((student) => (
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
    </>
  );
};

export default StudentSearch;
