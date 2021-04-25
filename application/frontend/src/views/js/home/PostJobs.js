// CSS
import "../../css/Theme.css";
import "../../css/Home.css";
// React Boostrap
import Button from "react-bootstrap/Button";
//Cookies
import { useCookies } from "react-cookie";

//TODO: ID_OF_USER needs to be an existing employer. The easiest solution might be creating another default employer
//for anonymous.
const PostJobs = () => {
  const [cookies, setCookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]);

  function postJobs(e){
    e.preventDefault();
    setCookie('Type_User', 'employer');
    setCookie('ID_OF_USER', '4');
    setCookie('First_Name', 'anonymous');
    window.location.href='/insert-jobs';
  }

  return (
    <div className="box">
      <h1>
        Post Jobs <br /> Your next hire is here
      </h1>
      <p>
        People come to Hatchio every day to discover opportunities and build
        their careers. We put your job in front of the most qualified members —
        and those open to new opportunities.
      </p>
      <Button variant="flat" size="xl" className="home-btn" onClick={postJobs}>
        Post Jobs
      </Button>
    </div>
  );
};

export default PostJobs;
