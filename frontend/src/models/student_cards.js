import PORT_HOST from "../config";
const API_FETCH_STUDENTS = async () => {
  const response = await fetch(`${PORT_HOST.PORT_HOST}/student_cards`);
  const data = await response.json();
  return data;
};
export default API_FETCH_STUDENTS;
