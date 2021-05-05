import "./views/css/Theme.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Nav from "./views/js/global/Nav";
import Home from "./views/js/home/Home";
import Auth from "./views/js/auth/Auth";
import SignupRedirect from "./views/js/auth/Redirect";
import StudentSearch from "./views/js/search/student/StudentSearch";
import JobSearch from "./views/js/search/jobs/JobSearch";
import About from "./views/js/about/About";
import Help from "./views/js/help/Help";
import Notifications from "./views/js/notifications/Notification";
import StudentProfile from "./views/js/profiles/student/StudentProfile";
//All Users
import Profile from "./views/js/user/Dashboard";
//Employers
import PostJobs from "./views/js/profiles/company/PostJobs";

//Full View
import PublicProfile from "./views/js/search/student/PublicStudentProfile";
import JobPost from "./views/js/search/jobs/JobView";
// Bootstrap
import Alert from "react-bootstrap/Alert";

const App = ({ location }) => {
  return (
    <Router>
      <div className='App'>
        <Alert
          variant='warning'
          style={{
            zIndex: "100",
            height: "1.5rem",
            paddingTop: "0",
            textAlign: "center",
          }}>
          SFSU CSC648/848, Spring 2021 | <b>Demonstration Only</b>
        </Alert>
        <div className='content'>
          <Switch>
            <Route exact path='/signup' component={SignupContainer} />
            <Route exact path='/signin' component={SigninContainer} />
            <Route component={DefaultContainer} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

const SignupContainer = () => (
  <Route path='/signup' component={() => <Auth type={"signup"} />} />
);

const SigninContainer = () => (
  <Route path='/signin' component={() => <Auth type={"signin"} />} />
);

const DefaultContainer = () => (
  <div>
    <Nav />
    <Route exact path='/' component={Home} />
    {/* Search Jobs */}
    <Route path='/search-jobs' component={JobSearch} />
    {/* Search Students */}
    <Route path='/search-candidates' component={StudentSearch} />
    {/* Public Profiles */}
    <Route path='/profiles/:account' component={PublicProfile} />
    {/* Student Profile */}
    <Route path='/student-profile' component={StudentProfile} />
    {/* About */}
    <Route path='/about' component={About} />
    {/* Contact / Help */}
    <Route path='/help' component={Help} />
    {/** Full Job View */}
    <Route path='/posting' component={JobPost} />
    {/* Allows Company to Post Jobs */}
    <Route path='/postjobs' component={PostJobs} />
    {/* Profile for User Logged In */}
    <Route path='/profile' component={Profile} />
    {/* Notifications */}
    <Route path='/notifications' component={Notifications} />
  </div>
);

export default App;
