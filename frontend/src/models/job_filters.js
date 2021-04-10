import PORT_HOST from "../config";

export default function API_JOB_LISTINGS_FETCH_FILTER(
  setArr,
  JobType,
  PositionTitle
) {
  fetch(
    `${PORT_HOST.PORT_HOST}/filter_job_cards?job_type=${JobType}&position_title=${PositionTitle}`
  )
    .then((response) => response.json())
    .then((json) => setArr(json));
}
