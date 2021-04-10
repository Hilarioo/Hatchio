const SQL_QUERY = require("./cards");
const API_JOB_CARD_FILTER = (job_type, position_title) => {
  if (job_type == "Select" && position_title == "Select") {
    return SQL_QUERY.API_JOB_CARD;
  }
  if (job_type == "Select") {
    return `${SQL_QUERY.API_JOB_CARD} where c_l.position_title="${position_title}";`;
  }
  if (position_title == "Select") {
    return `${SQL_QUERY.API_JOB_CARD} where job_type="${job_type}";`;
  } else {
    return `${SQL_QUERY.API_JOB_CARD} where job_type="${job_type}" and c_l.position_title="${position_title}";`;
  }
};

module.exports = {
  API_JOB_CARD_FILTER,
};
