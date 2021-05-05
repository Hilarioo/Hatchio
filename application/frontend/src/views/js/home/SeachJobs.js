// CSS
import "../../css/Theme.css";
import "../../css/Home.css";
// React Boostrap
import Button from "react-bootstrap/Button";
//Pop Up Form
import { useCookies } from "react-cookie";

const PostJobs = () => {
  const [cookie] = useCookies(["Type_User"]);

  function postJobs(e) {
    e.preventDefault();
    window.location.href = "/search-jobs";
  }

  return (
    <div className='box' style={{ maxWidth: "450px" }}>
      <h1 id='post-header'>From Student To Employee</h1>
      <p id='post-p'>
        Build your resume with projects, top strengths, and much more to become
        noticed by top recruiters. Jumpstart your career path by applying to
        hundreds of jobs. You'll be able to keep track of your applications
        through your notifications portal.
      </p>
      <Button variant='flat' size='xl' className='home-btn' onClick={postJobs}>
        Search Jobs
      </Button>
    </div>
  );
};
export default PostJobs;
