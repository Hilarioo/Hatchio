#User Tables
insert into professors(first_name,last_name,password,email,state,code) values ("Henry","Villar","pass12345","henry@mail.com",0,"500");
insert into professors(first_name,last_name,password,email,state,code) values ("Hui","Huang","pass12345","huiyang@mail.com",0,"500");
insert into professors(first_name,last_name,password,email,state,code) values ("Jose","Ortiz","pass12345","jose@mail.com",0,"500");
insert into professors(first_name,last_name,password,email,state,code) values ("Duc","Ta","pass12345","ducTa@mail.com",0,"500");

insert into students(first_name,last_name,password,email,state,code) values ("Aaron","Whopper","pass12345","aaron@mail.com",0,"500");
insert into students(first_name,last_name,password,email,state,code) values ("Jose","Gonzalez","pass12345","joseG@mail.com",0,"500");
insert into students(first_name,last_name,password,email,state,code) values ("Roland","Lee","pass12345","rolandlee@mail.com",0,"500");
insert into students(first_name,last_name,password,email,state,code) values ("Lyra","Solomon","pass12345","lyrasolomon@mail.com",0,"500");

insert into employers(organization_name,password,email,state,code) values ("Microsoft","los12345","microsoft@mailr.com",0,"500");
insert into employers(organization_name,password,email,state,code) values ("Apple","los12345","apple@mailr.com",0,"500");
insert into employers(organization_name,password,email,state,code) values ("Tesla","los12345","tesla@mailr.com",0,"500");
insert into employers(organization_name,password,email,state,code) values ("SquareSpace","los12345","squarespace@mailr.com",0,"500");
insert into admins(first_name,last_name,password,email,state,code) values ("main","admin","dos12345","adminlead@mail.com",0,"500");

#Pages Tables
insert into professor_profile_page(professor_id,about_me) values (1,"I teach at SFSU CSC648");

insert into student_profile_page(student_id,about_me,study_major,grade_gpa,location) values (1,"junior at sfsu","computer science",4.0,"california");
insert into student_profile_page(student_id,about_me,study_major,grade_gpa,location) values (2,"junior at sfsu","computer science",5.0,"california");
insert into student_profile_page(student_id,about_me,study_major,grade_gpa,location) values (3,"junior at sfsu","computer science",5.0,"california");
insert into student_profile_page(student_id,about_me,study_major,grade_gpa,location) values (4,"junior at sfsu","computer science",5.0,"california");

insert into employer_profile_page(employer_id,position_title,company_organization) values (1,"company manager","microsoft");
insert into projects(student_id,posted_time,summary,collaboraters) values (1,now(),"game development in c++","ubisoft and dormate");

insert into company_listings(employer_id,position_title,location,salary,job_description,task_responsibilities,skillset,benefits,company_name) values (1,"Database Developer","Ohio",200000,"Designing db model with mySql","working along with teammates on db","c,python,c++","401k","Facebook");
insert into company_listings(employer_id,position_title,location,salary,job_description,task_responsibilities,skillset,benefits,company_name) values (2,"Backend Developer","New York",30000,"Front-End and making user interfaces","Manage Backend routes","JavaScript","201k","Apple");
insert into company_listings(employer_id,position_title,location,salary,job_description,task_responsibilities,skillset,benefits,company_name) values (3,"Frontend Developer","New York",30000,"Front-End and making user interfaces","Manage Frontend application","javascript","401k","Microsoft");

drop table company_listings;


#Single Tables 
insert into reflections(student_id,professor_id,posted_time,responsible_level,team_work_level,leadership_level,committed_to_success_level,recommendation_comment)values(1,1,now(),1,1,1,1,"very good student");