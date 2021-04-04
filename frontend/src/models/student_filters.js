import PORT_HOST from "../config";
//STILL WORKING ON
export default function API_STUDENT_CARD_FILTER(
  setArr,
  academic_major,
  student_year,
  rating_score,
  gpa_range,
  strength_keyword
) {
  console.log(academic_major);
  fetch(`${PORT_HOST}/job_cards`)
    .then((response) => response.json())
    .then((json) => setArr(json));
}
