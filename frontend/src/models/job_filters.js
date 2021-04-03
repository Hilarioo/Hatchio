import { port_host } from "../config";

export default function API_JOB_LISTINGS_FETCH_FILTER(setArr, academic_major, student_year, rating_score, gpa_range) {
  fetch(`${port_host}/job_cards`)
    .then((response) => response.json())
    .then((json) => setArr(json));
}
