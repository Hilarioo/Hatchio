# Node Hatchio Dev Change Log

i. Change Log
ii. Issues

#### Unresolved Issues

~~- Passing in a useState to another component as a prop w/ update. <- Go to dashboard.js and sign in w/ any of these credentials to see what i mean~~ fixed

#### Currently Working

- First Time Users and View Layer Dashboard.js

#### Sunday, April 17, 2021 :: Aaron

- Fixed Profile Page Rendering
- First Time User Form

#### Saturday, April 17, 2021 :: Aaron

- POST handling with Job Form Submission Complete // but pretty poor css but works
- Fixed Student Ratings Query for Student Cards
- Cleaner Database Populate

#### Friday, April 16, 2021 :: Aaron

- Updated ES6 asyn/await API fetch
- Added code signatures
- Added onto Revamped Student Cards w/ PopUp Rate Functionality for Professors & Redirect to View Full Student Profile Page
- Dashboard.js w/ Jose's revamped Profile Components for Employers | Professors | Students
- Currently working on P1 Functions & ~~Merging Jose's Push on branch page/StudentPofile~~ done
- Old logs for History Table for one of the milestone documents

#### Tuesday, April 13, 2021 :: Aaron

- Started adding brief descriptions in the beginning of backend/routes in order to create more consistency and help in screenshot code for milestone 04 review page
- Fixed a issue w/ dashboard.js where Type_User was not being checked as "undefined" or "null"
- Possibly fixed an issue with fetch fired in useEffect for StudentsSearch.js, the problem w/ fetch is that the response isn't returned instantly, so map will return an error if there's nothing in the dbStudents useState, so to work around it to have a empty object that will refresh once the response is returned

#### Monday, April 12, 2021 :: Aaron

- ~~Remember to hit `Sign Out` when you first launch the application <- still working on debugging this>~~ Fixed
- Remember to `npm run node_hatchio_init` im still in process of redesigning db but the previous error shouldnt occur anymore
- Implemented visible only rate page for professor to rate student

#### Saturday , March 31,2021 :: Aaron

- Redesigned User Tables to match sign up page

#### Friday , March 31,2021 ::Aaron

- Corresponding database with information needed and being used on figma
- reset database
- up to date repo with features/u
- folder seperations with api calls and server.js

#### Wenesday, March 31,2021 :: Aaron

- Tested Image loading of student profiles
- if you run sql , it will auto-populate the tables and reset every table
- Meet with Jose for clarifications and brainstorming how to implement Figma's layout

#### Tuesday, March 30,2021 :: Aaron

- Done json response with proper formating ish
- Fixed job listings db schema
- Populated students and job listings with 3 entries on job listings and 4 on students

#### Monday, March 29, 2021 :: Aaron

- Worked a little bit on ratings page
- can fetch from backend but, i'm trouble iterating through the students

#### Sunday, March 28, 2021 :: Aaron

- React Application and Express Server w/ concurrently
- SetUp JobsListings Filters and Changed Queries

#### Saturday, March 27, 2021 :: Aaron

- dir seperation with backend and frontend to increase simplicity,organization,and pm2 adjustment instead of using npm run dev
- mysql-scripts to set up local environment database
- server.js removed old queries to adapt to new database design
- backend user interface to visualize and confirm json response when front-end makes a fetch
- additional navigationb bars to more effectively split tasks?

---
