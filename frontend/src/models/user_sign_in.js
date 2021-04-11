import PORT_HOST from "../config";

export default async function API_USER_LOG_IN(email, password, usertype) {
  const headers = { method: "GET", credentials: "include" };
  return fetch(
    `${PORT_HOST.PORT_HOST}/sign_in?Email=${email}&Password=${password}&Type=${usertype}`,
    headers
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
