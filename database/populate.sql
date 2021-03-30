#User Tables
insert into professors(first_name,last_name,password,email,state,code) values ("Henry","Villar","pass12345","henry@mail.com",0,"500");
insert into students(first_name,last_name,password,email,state,code) values ("Aaron","Whopper","kos12345","aaron@mail.com",0,"500");
insert into employers(organization_name,password,email,state,code) values ("Microsoft","los12345","microsoft@mailr.com",0,"500");
insert into admins(first_name,last_name,password,email,state,code) values ("main","admin","dos12345","adminlead@mail.com",0,"500");

#Pages Tables
insert into professor_profile_page(professor_id,about_me) values (1,"I teach at SFSU CSC648");
insert into student_profile_page(student_id,about_me,study_major,grade_gpa,location) values (1,"junior at sfsu","computer science",4.0,"california");
insert into employer_profile_page(employer_id,position_title,company_organization) values (1,"company manager","microsoft");
insert into projects(student_id,posted_time,summary,collaboraters) values (1,now(),"game development in c++","ubisoft and dormate");
insert into company_listings(employer_id,position_title,location,salary,job_description,task_responsibilities,skillset,benefits) values (1,"senior developer","california",500000,"work on backend stuff","lead project","c,python,c++","401k");



