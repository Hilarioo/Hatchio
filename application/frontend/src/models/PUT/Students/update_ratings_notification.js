import PORT_HOST from "../../../config";

export default async function API_UPDATE_STUDENT_RATING_NOTIFICATION(
  reflection_id
) {
  const headers = { method: "PUT" };
  const REQUEST_QUERY = `/student-ratings?id=${reflection_id}`;
  const response = await fetch(
    `${PORT_HOST.PORT_HOST}${REQUEST_QUERY}`,
    headers
  );
  return response;
}
