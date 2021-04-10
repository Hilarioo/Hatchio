import PORT_HOST from "../config";

export default function API_USER_LOG_IN(email, password, usertype) {
  fetch(
    `${PORT_HOST.PORT_HOST}/sign_in?Email=${email}&Password=${password}&Type=${usertype}`,
    {
      method: "GET",
      credentials: "include",
    }
  ).then((e) => console.log(`Response Sent ${e} `));
}
