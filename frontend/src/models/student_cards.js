import { port_host } from "../config";
export default function api_fetch_students(setArr) {
  fetch(`${port_host}/student_cards`)
    .then((response) => response.json())
    .then((json) => setArr(json));
}
