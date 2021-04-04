import PORT_HOST from "../config";
export default function api_fetch_students(setArr) {
  fetch(`${PORT_HOST}/student_cards`)
    .then((response) => response.json())
    .then((json) => setArr(json));
}
