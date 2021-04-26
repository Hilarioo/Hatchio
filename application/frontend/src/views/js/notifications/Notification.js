import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import API_STUDENT_RATING_NOTIFICATIONS from "../../../models/GET/Students/rating_notifications";

const Notifications = () => {
  useEffect(() => {
    API_STUDENT_RATING_NOTIFICATIONS(setRatingNotifications, cookie.ID_OF_USER);
    console.log(ratingNotifications);
  }, []);
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]); //Current User
  const [ratingNotifications, setRatingNotifications] = useState([]);

  var seen_notifications = [];
  const unseen_notifications =
    ratingNotifications.length == 0
      ? `Empty`
      : ratingNotifications.map((row) => {
          //Not Seen
          if (row.student_seen == 0) {
            return (
              <>
                <tr>
                  <td>
                    <b>Professor </b>: {row.first_name}
                  </td>
                  <td>
                    <b>Time Rated</b> {row.publish_date}
                  </td>
                  <td>
                    <b>Rating Total</b> {row.rating_total}
                  </td>
                  <td>
                    <b>ADD BUTTON SEEN</b>
                  </td>
                </tr>
              </>
            );
            //Seen and Not Deleted by Student
          } else if (row.student_seen == 1 && row.student_hide == 0) {
            seen_notifications.push(
              <>
                <tr>
                  <td>
                    <b>Professor </b>: {row.first_name}
                  </td>
                  <td>
                    <b>Time Rated</b> {row.publish_date}
                  </td>
                  <td>
                    <b>Rating Total</b> {row.rating_total}
                  </td>
                  <td>
                    <b>ADD BUTTON DELETE</b>
                  </td>
                </tr>
              </>
            );
          }
        });

  //Fetch Notification
  if (cookie.Type_User === "student") {
    return (
      <div>
        <h4>Student Notifications for Professor Ratings | Employer Interest</h4>
        <hr></hr>
        <div>
          <h4>Rating UnSeen Ratings Notifications</h4>
          {unseen_notifications}
        </div>
        <hr></hr>
        <div>
          <h4> Rating Seen Ratings Notifications</h4>
          {seen_notifications}
        </div>
        <hr></hr>
      </div>
    );
  }
  if (cookie.Type_User === "professor") {
    return (
      <div>
        <h3>Professor Notifications</h3>
      </div>
    );
  }
  return (
    <div>
      <h1>
        Notifications are enabled for employers and students. Please sign in as
        an employer or student.
      </h1>
    </div>
  );
};
export default Notifications;
