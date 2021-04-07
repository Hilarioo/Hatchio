import PORT_HOST from "../config";
export default function API_FETCH_PROFILE(setArr) {
  fetch(`${PORT_HOST.PORT_HOST}/full_profile`)
    .then((response) => response.json())
    .then((json) => setArr(json));
}
