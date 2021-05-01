import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import CompanyProfile from "../profiles/company/CompanyProfile";

import API_STUDENT_RATING_NOTIFICATIONS from "../../../models/GET/Students/rating_notifications";
import API_UPDATE_STUDENT_RATING_NOTIFICATION from "../../../models/PUT/Students/update_ratings_notification";
import API_USER_GET_PROFILE from "../../../models/user_profile";

const Notifications = () => {
  useEffect(() => {
    if (cookie.Type_User === "student") {
      API_STUDENT_RATING_NOTIFICATIONS(
        setRatingNotifications,
        cookie.ID_OF_USER
      );
      console.log(ratingNotifications);
    }
    if (cookie.Type_User === "employer") {
      API_USER_GET_PROFILE(cookie.Type_User, cookie.ID_OF_USER, setuserProfile);
    }
  }, []);
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]); //Current User
  const [ratingNotifications, setRatingNotifications] = useState([]);
  //Employed Jobs
  const [userProfile, setuserProfile] = useState([
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
  ]);

  const seenNotification = async (reflection_id) => {
    console.log(`Reflection ID: ${reflection_id}`);
    const response = await API_UPDATE_STUDENT_RATING_NOTIFICATION(
      reflection_id,
      "student_ratings"
    );
    if (response.status == 400) {
      console.log("Failed to Update");
    }
    if (response.status == 200) {
      console.log("Sucess ");
      window.location.reload();
    }
  };

  const deleteNotification = async (reflection_id) => {
    //TODO: Set Delte Boolean Off
  };

  var seen_notifications = [];
  const unseen_notifications =
    ratingNotifications.length == 0
      ? `Empty`
      : ratingNotifications.map((row) => {
          //Not Seen
          if (row.student_seen == 0 && row.student_hide == 0) {
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
                    <button onClick={() => seenNotification(row.reflection_id)}>
                      SEEN
                    </button>
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
  if (cookie.Type_User === "employer") {
    return (
      <div>
        <h3>Alerts</h3>
        <div>
          <>
            <CompanyProfile {...userProfile} />
          </>
        </div>
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
