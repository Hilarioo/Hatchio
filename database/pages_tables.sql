create table professor_profile_page(
professor_id int primary key,
about_me mediumtext,
degree_certification blob,
foreign key (professor_id) references professors(professor_id)
);

create table student_profile_page(
student_id int primary key,
about_me mediumtext,
study_major varchar(255),
grade_gpa float,
location varchar(255),
resume blob,
foreign key (student_id) references students(student_id)
);

create table employer_profile_page(
employer_id int primary key,
position_title varchar(255),
company_organization varchar(255),
foreign key (employer_id) references employers(employer_id)
);

create table projects(
student_id int primary key,
posted_time date,
summary mediumtext,
gallary_image blob,
collaboraters varchar(255),
foreign key (student_id) references students(student_id)
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
foreign key (employer_id) references employers(employer_id)
);

select * from professor_profile_page;
select * from student_profile_page;
select * from employer_profile_page;
select * from company_listings;
select * from projects;

drop table professor_profile_page;
drop table student_profile_page;
drop table employer_profile_page;
drop table projects;
drop table company_listings;