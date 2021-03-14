const aws_port = `http://ec2-3-142-225-111.us-east-2.compute.amazonaws.com:5000`;
const local_port = `http://localhost:5000`;

const dev_environment = (localmachine) => {
  return localmachine ? local_port : aws_port;
};
const port_host = dev_environment(true);

module.exports = {
  port_host,
};
