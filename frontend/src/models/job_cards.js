import { port_host } from "../config";

export default function API_JOB_LISTINGS_FETCH(setArr) {
  fetch(`${port_host}/job_cards`)
    .then((response) => response.json())
    .then((json) => setArr(json));
}
