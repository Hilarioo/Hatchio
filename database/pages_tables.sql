create table professor_profile_page(
professor_id int primary key,
about_me mediumtext,
degree_certification blob,
profile_image longtext default null,
foreign key (professor_id) references professors(professor_id)
);

create table student_profile_page(
student_id int primary key,
about_me mediumtext,
strengths_qualities mediumtext,
location varchar(255),
resume blob default null,
profile_image longtext default null,
foreign key (student_id) references students(student_id)
);

create table student_education(
student_id int,
school varchar(255),
degree varchar(255),
school_gpa float,
study_major varchar(255),
start_year year,
end_year year,
foreign key (student_id) references students(student_id)
);

create table student_projects(
student_id int,
project_name varchar(150),
summary mediumtext,
arr_tools_used mediumtext,
professor varchar(50),
links_website varchar(50),
links_other_website varchar(50),
arr_collaborators_arr mediumtext,
media mediumtext,
foreign key (student_id) references students(student_id)
);

create table student_experience(
student_id int,
role_position varchar(75),
employment_type varchar(75),
arr_tools_used mediumtext,
company_name varchar(150),
location varchar(150),
start_date date,
end_date date,
currently_working tinyint,
foreign key (student_id) references students(student_id)
);

create table employer_profile_page(
employer_id int primary key,
position_title varchar(255),
company_organization varchar(255),
profile_image longtext default null,
foreign key (employer_id) references employers(employer_id)
);

create table company_listings(
employer_id int primary key,
position_title varchar(255),
location varchar(255),
salary float,
landscape_view blob,
job_description mediumtext,
task_responsibilities mediumtext,
skillset mediumtext,
benefits mediumtext,
company_name varchar(255),
type_of_employment varchar(255),
foreign key (employer_id) references employers(employer_id)
);
