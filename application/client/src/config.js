const aws_port = `http://3.141.216.125:5000`;
const local_port = `http://localhost:5000`;

const dev_environment = (localmachine) => {
  return localmachine ? local_port : aws_port;
};
const port_host = dev_environment(false);

module.exports = {
  port_host,
};
