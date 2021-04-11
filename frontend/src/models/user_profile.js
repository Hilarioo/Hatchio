import PORT_HOST from "../config";

export default async function API_USER_GET_PROFILE(setArr, typeUser, idr) {
  return fetch(`${PORT_HOST.PORT_HOST}/profile?ts=${typeUser}&bs=${idr}`)
    .then((response) => response.json())
    .then((json) => {
      setArr(json);
      return;
    });
}
