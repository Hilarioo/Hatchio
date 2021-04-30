import PORT_HOST from "../../../config";

export default async function API_FIND_CANDIDATE(student_id){
  const header = {method: "GET"};
  const REQUEST_QUERY = `/find_student?id=${student_id}`;
  const response = await fetch(
    `${PORT_HOST.PORT_HOST}${REQUEST_QUERY}`,
    header
  );
  console.log(response);
  return response;
}
