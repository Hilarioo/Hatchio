/**
 * File: register_user.js
 * Purpose: generate and send unique verification link to new registed users.
 * Functionality IE: Send GET request to Backend Server
 * Authors: Aaron and Roland
 */
import { PORT_HOST } from "../config";
import cryptoRandomString from "crypto-random-string";
var code = cryptoRandomString({ length: 100, type: "base64" })
  .replace(/[/+=]/g, "")
  .substr(-30);

export function API_SEND_EMAIL(jsonPOST) {
  const { email, usertype } = jsonPOST;
  // console.log("User: " + usertype + "email: " + email + " code: " + code);
  fetch(
    `${PORT_HOST}/send?UserType=${usertype}&email=${email}&code=${code}`
  ).then((e) => console.log(`Response: ${JSON.stringify(e)}`));
}

export function API_REGISTER_USER(jsonPOST) {
  const {
    usertype,
    firstName,
    lastName,
    schoolname,
    password,
    email,
  } = jsonPOST;
  fetch(
    `${PORT_HOST}/register?UserType=${usertype}&first_name=${firstName}&last_name=${lastName}&school_name=${schoolname}&password=${password}&email=${email}&code=${code}`
  ).then((e) => console.log(`Response: ${JSON.stringify(e)}`));
}
