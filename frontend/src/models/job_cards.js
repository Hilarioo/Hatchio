import CONFIG from "../../../configuration/config";

export default function API_JOB_LISTINGS_FETCH(setArr) {
  fetch(`${CONFIG.HOST_PORT}/job_cards`)
    .then((response) => response.json())
    .then((json) => setArr(json));
}
