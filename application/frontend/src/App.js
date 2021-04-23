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
import StudentProfile from "./views/js/profiles/student/StudentProfile";
//All Users
import Dashboard from "./views/js/user/Dashboard";
//Employers
import PostJobs from "./views/js/profiles/company/PostJobs";

//Full View
import Full_Student_Profile from "./views/js/search/student/PublicStudentProfile";
import Full_Job_View from "./views/js/search/jobs/JobView";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Switch>
            {/* Home */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* Signin */}
            <Route
              path="/signin"
              exact
              component={() => <Auth type={"signin"} />}
            />
            {/* Signup */}
            <Route
              path="/signup"
              exact
              component={() => <Auth type={"signup"} />}
            />
            {/* Signup Redirect */}
            <Route path="/signup-redirect">
              <SignupRedirect />
            </Route>
            {/* Search Students */}
            <Route path="/search-candidates">
              <StudentSearch />
            </Route>
            {/* Search Jobs */}
            <Route path="/search-jobs">
              <JobSearch />
            </Route>
            {/* Profile */}
            <Route path="/student-profile">
              <StudentProfile />
            </Route>
            {/* About */}
            <Route path="/about">
              <About />
            </Route>
            {/* Contact / Help */}
            <Route path="/help">
              <Help />
            </Route>
            {/** Public View of Student Profile */}
            <Route path="/full-student-profile">
              <Full_Student_Profile />
            </Route>
            {/** Full Job View */}
            <Route path="/full-job-view">
              <Full_Job_View />
            </Route>
            {/** ONLY Professors */}
            <Route path="/insert-jobs">
              <PostJobs />
            </Route>
            {/** ALL USERS */}
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
