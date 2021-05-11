/**
 * File: delete_job.js
 * Purpose: Delete selected job
 * Functionality IE: Send DELETE request to Backend Server
 * Authors: Roland
 */

import PORT_HOST from "../../config";

export default async function API_REMOVE_JOB(listing_id) {
  const header = { method: "DELETE" };
  const REQUEST_QUERY = `/delete_job?id=${listing_id}`;
  const response = await fetch(`${PORT_HOST.PORT_HOST}${REQUEST_QUERY}`, header);
  return response;
}
