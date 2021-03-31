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
create table employers (
employer_id int auto_increment primary key,
organization_name varchar(255) not null,
password varchar(255) not null,
email varchar(255) not null unique key,
state TINYINT default null,
code varchar(500)
);
create table admins (
admin_id int auto_increment primary key,
first_name varchar(255) not null,
last_name varchar(255) not null,
password varchar(255) not null,
email varchar(255) not null unique key,
state TINYINT default null,
code varchar(500)
);

