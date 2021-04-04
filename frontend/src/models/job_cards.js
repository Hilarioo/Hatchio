//import { port_host } from "../config";
import PORT_HOST from "../config";

export default function API_JOB_LISTINGS_FETCH(setArr) {
  fetch(`${PORT_HOST}/job_cards`)
    .then((response) => response.json())
    .then((json) => setArr(json));
}
