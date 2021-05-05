// CSS
import "../../css/Theme.css";
import "../../css/Home.css";
// React Boostrap
import Button from "react-bootstrap/Button";
import { useCookies } from "react-cookie";

const PostJobs = () => {
  const [cookie] = useCookies(["Type_User"]);

  function postJobs(e) {
    e.preventDefault();
    if (cookie.Type_User === "employer") window.location.href = "/insert-jobs";
    else window.location.href = "/signin";
  }

  return (
    <div className='box' style={{ maxWidth: "450px" }}>
      <h1 id='post-header'>
        Your Next Hire <br /> Is Here
      </h1>
      <p id='post-p'>
        People come to Hatchio every day to discover opportunities and build
        their careers. We put your job in front of the most qualified members —
        and those open to new opportunities.
      </p>
      <Button variant='flat' size='xl' onClick={postJobs}>
        Post Jobs
      </Button>
    </div>
  );
};
export default PostJobs;
