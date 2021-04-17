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
import StudentForm from "./views/js/forms/FirstTimeUser";
import Dashboard from "./views/js/user/Dashboard";

//Full Profile View
import Full_Student_Profile from "./views/js/search/student/StudentProfile";
// Testing
import Forms from "./views/js/forms/forms";

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
            {/* TESTING FORMS */}
            <Route path="/forms">
              <Forms />
            </Route>
            {/* First Time User Form */}
            <Route path="/welcome-student-form">
              <StudentForm />
            </Route>
            <Route path="/full-student-profile">
              <Full_Student_Profile />
            </Route>
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
