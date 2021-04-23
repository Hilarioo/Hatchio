// CSS
import "../../css/Theme.css";
import "../../css/Home.css";
// React Boostrap
import Button from "react-bootstrap/Button";
//Pop Up Form
import Popup from "reactjs-popup";

const PostJobs = () => {
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
      <Popup
        trigger={
          <Button variant="flat" size="xl" className="home-btn">
            Post Jobs
          </Button>
        }
      >
        <p>Sign In/Up as a Employer!</p>
      </Popup>
    </div>
  );
};

export default PostJobs;
