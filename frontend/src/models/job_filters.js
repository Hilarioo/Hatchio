//import { port_host } from "../config";
import PORT_HOST from "../config";
//STILL WORKING
export default function API_JOB_LISTINGS_FETCH_FILTER(setArr, academic_major, student_year, rating_score, gpa_range) {
  fetch(`${PORT_HOST}/job_cards`)
    .then((response) => response.json())
    .then((json) => setArr(json));
}
