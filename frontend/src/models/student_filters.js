import PORT_HOST from "../config";
export default function API_STUDENT_CARD_FILTER(
  setArr,
  academic_major,
  student_year,
  rating_score,
  gpa_range,
  strength_keyword
) {
  fetch(
    `${PORT_HOST.PORT_HOST}/filter_student_cards?am=${academic_major}&sy=${student_year}&rs=${rating_score}&gpr=${gpa_range}&sk=${strength_keyword}`
  )
    .then((response) => response.json())
    .then((json) => setArr(json));
}
