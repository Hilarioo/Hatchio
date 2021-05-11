import PORT_HOST from "../../../config";

export default async function API_STUDENT_UPDATE_EXPERIENCE(table) {
  //Request Body & Header Configuration
  const headers = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(table),
  };

  const response = await fetch(`${PORT_HOST.PORT_HOST}/insert-experience`, headers);
  // console.log(response.status);
  return response;
}
