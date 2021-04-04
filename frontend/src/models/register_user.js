import PORT_HOST from "../config";

export default function API_USER_POST(jsonPOST) {
  fetch(`${PORT_HOST}/register`, jsonPOST);
}
