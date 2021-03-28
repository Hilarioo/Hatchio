create table feedback_report_error(
user_id int primary key,
admin_id int,
feedback_complain_txt mediumtext,
reporting_route varchar(255),
foreign key (admin_id) references admins(admin_id)
);

create table reflections(
reflection_id int primary key,
student_id int,
professor_id int,
posted_time date,
comments mediumtext,
rating_skills varchar(255),
rating_number int,
overall_score int,
foreign key (student_id) references students(student_id),
foreign key (professor_id) references professors(professor_id)
);

create table message_notifications(
msg_id int primary key,
sender varchar(255),
recipient varchar(255),
sent_time date,
text_content mediumtext,
alert_received bool
);

select * from feedback_report_error;
select * from reflections;
select * from message_notifications;

drop table feedback_report_error;
drop table reflections;
drop table message_notifications;