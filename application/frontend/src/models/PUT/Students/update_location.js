import PORT_HOST from "../../../config";

export default async function API_UPDATE_STUDENT_LOCATION(student_id, location) {
  const headers = { method: "PUT" };
  const REQUEST_QUERY = `/location?id=${student_id}&location=${location}`;
  const response = await fetch(`${PORT_HOST.PORT_HOST}${REQUEST_QUERY}`, headers);
  return response;
}
