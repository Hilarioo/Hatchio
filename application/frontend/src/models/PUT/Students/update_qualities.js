import PORT_HOST from "../../../config";

export default async function API_UPDATE_QUALITIES(student_id, qualities) {
  const headers = { method: "PUT" };
  const REQUEST_QUERY = `/strength_qualities?id=${student_id}&qualities=${qualities}`;
  const response = await fetch(`${PORT_HOST.PORT_HOST}${REQUEST_QUERY}`, headers);
  return response;
}
