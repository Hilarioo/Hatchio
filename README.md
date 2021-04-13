# Node Hatchio Dev Change Log

i. Change Log
ii. Old Notes

## Tuesday, April 13, 2021 :: Aaron

- Started adding brief descriptions in the beginning of backend/routes in order to create more consistency and help in screenshot code for milestone 04 review page
- Fixed a issue w/ dashboard.js where Type_User was not being checked as "undefined" or "null"
- Possibly fixed an issue with fetch fired in useEffect for StudentsSearch.js, the problem w/ fetch is that the response isn't returned instantly, so map will return an error if there's nothing in the dbStudents useState, so to work around it to have a empty object that will refresh once the response is returned

## Monday, April 12, 2021 :: Aaron

- ~~Remember to hit `Sign Out` when you first launch the application <- still working on debugging this>~~ Fixed
- Remember to `npm run node_hatchio_init` im still in process of redesigning db but the previous error shouldnt occur anymore
- Implemented visible only rate page for professor to rate student

---

#### Please when ready add your teams application URL or IP to the repository description. This will help with grading. Teams are expected to keep this value up to date.

#### Please do the following steps before completing Milestone 0.

1. Change the name of the repository. All that needs to change is the NN to your respective team number. Team numbers whose value is less than 10, please pad with a 0. Ex team 1 is Team01 team 11 is Team11. Please make sure to also remove the username from the repository as well. Teams with incorrectly name repository will have points deducted from their milestone 0 grades.

   - Please follow the naming convention assigned by your instructor.

1. PLEASE REMOVE THE USERNAME FROM THE REPOSITORY NAME!!!

1. Add ALL members of your team to this repository. For it to count, they must ACCEPT the invite.

1. Fill out the table below

| Student Name |       Student Email       | GitHub Username |
| :----------: | :-----------------------: | :-------------: |
|   member1    |   mlee38@mail.sfsu.edu    |  rolandlee0308  |
|   member2    | jgonzalez34@mail.sfsu.edu |    Hilarioo     |
|   member3    |  asingh26@mail.sfsu.edu   |   singhaaron    |
|   member4    |  lsolomon3@mail.sfsu.edu  |   LyraSolomon   |

#### NO code needs to be stored in the root of your repository. You may rename the application folder if you like to your team's application name. But all source code related to your team's application should be stored inside the application folder.
