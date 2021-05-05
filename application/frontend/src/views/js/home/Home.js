// CSS
import "../../css/Theme.css";
import "../../css/Home.css";
// Components
import Footer from "../global/Footer";
import PostJobs from "./PostJobs";
import SearchJobs from "./SeachJobs";
import Recruitment from "../../content/svg/recruitment.svg";
import JobSearch from "../../content/svg/jobsearch.svg";
// Iconfiy
import { Icon } from "@iconify/react";
import baselineCopyright from "@iconify-icons/ic/baseline-copyright";

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <div className='home-flex top'>
          <img src={JobSearch} alt='job search img' />
          <SearchJobs />
        </div>
        <div className='home-flex bottom'>
          <PostJobs />
          <img src={Recruitment} alt='recruitment' />
        </div>
      </div>
      <footer className='home-footer'>
        <p>
          <b>
            Copyright{" "}
            <Icon icon={baselineCopyright} className='icon-copyright' /> 2021
            Hatchio
          </b>{" "}
          <br />
          cookie policy | privacy policy | terms & conditions
        </p>
      </footer>
    </>
  );
};

export default Home;
