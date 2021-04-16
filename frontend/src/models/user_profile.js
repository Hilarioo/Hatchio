import PORT_HOST from "../config";

export default async function API_USER_GET_PROFILE(typeUser, idr, setState) {
  const response = await fetch(
    `${PORT_HOST.PORT_HOST}/profile?ts=${typeUser}&bs=${idr}`
  );
  const data = await response.json();
  console.log(data);
  setState(data);
  return data;
}
