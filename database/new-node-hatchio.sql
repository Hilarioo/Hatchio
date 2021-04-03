create table professors (
professor_id int auto_increment primary key,
first_name varchar(255) not null,
last_name varchar(255) not null,
password varchar(255) not null,
email varchar(255) not null unique key,
state TINYINT default null,
code varchar(500)
);

create table students (
student_id int auto_increment primary key,
first_name varchar(255) not null,
last_name varchar(255) not null,
password varchar(255) not null,
email varchar(255) not null unique key,
state TINYINT default null,
code varchar(500)
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

create table student_ratings(
reflection_id int auto_increment primary key,
student_id int,
professor_id int,
responsible_level int,
team_work_level int,
leadership_level int,
committed_to_success_level int,
recommendation_comment mediumtext,
foreign key (student_id) references students(student_id),
foreign key (professor_id) references professors(professor_id)
);