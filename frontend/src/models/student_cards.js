import PORT_HOST from "../config";
export default function API_FETCH_STUDENTS(setArr) {
  fetch(`${PORT_HOST.PORT_HOST}/student_cards`)
    .then((response) => response.json())
    .then((json) => setArr(json));
}
