import PORT_HOST from "../../../config";
const API_STUDENT_RATING_NOTIFICATIONS = async (setArr, student_identifier) => {
  const response = await fetch(
    `${PORT_HOST.PORT_HOST}/student-ratings?s_id=${student_identifier}`
  );
  console.log("Student Identifier", student_identifier);
  const data = await response.json();
  if (data == 400) {
    //Dont set the data
    return;
  } else {
    console.log(data);
    setArr(data);
  }
  return;
};
export default API_STUDENT_RATING_NOTIFICATIONS;
