#Changelog

##2021.04.02
* add backend support for reviews and talent search
* implement Laplace-Bayes estimator for statistical integrity
* schema contains the following fields
```
mysql> describe Students;
+-------------+-------------+------+-----+---------+----------------+
| Field       | Type        | Null | Key | Default | Extra          |
+-------------+-------------+------+-----+---------+----------------+
| id          | int(11)     | NO   | PRI | NULL    | auto_increment |
| name        | varchar(50) | NO   |     | NULL    |                |
| email_addr  | varchar(50) | NO   |     | NULL    |                |
| password    | char(64)    | NO   |     | NULL    |                |
| salt        | char(32)    | NO   |     | NULL    |                |
| skill_comm  | float       | YES  |     | NULL    |                |
| skill_tech  | float       | YES  |     | NULL    |                |
| skill_ini   | float       | YES  |     | NULL    |                |
| skill_org   | float       | YES  |     | NULL    |                |
| num_reviews | int(11)     | YES  |     | NULL    |                |
+-------------+-------------+------+-----+---------+----------------+

mysql> describe Professors;
+------------+-------------+------+-----+---------+----------------+
| Field      | Type        | Null | Key | Default | Extra          |
+------------+-------------+------+-----+---------+----------------+
| id         | int(11)     | NO   | PRI | NULL    | auto_increment |
| name       | varchar(50) | NO   |     | NULL    |                |
| email_addr | varchar(50) | NO   |     | NULL    |                |
| password   | char(64)    | NO   |     | NULL    |                |
| salt       | char(32)    | NO   |     | NULL    |                |
+------------+-------------+------+-----+---------+----------------+

mysql> describe Reviews;
+-------------------+---------------+------+-----+---------+----------------+
| Field             | Type          | Null | Key | Default | Extra          |
+-------------------+---------------+------+-----+---------+----------------+
| id                | int(11)       | NO   | PRI | NULL    | auto_increment |
| student_id        | int(11)       | NO   | MUL | NULL    |                |
| professor_id      | int(11)       | NO   | MUL | NULL    |                |
| communication     | int(11)       | YES  |     | NULL    |                |
| technical_ability | int(11)       | YES  |     | NULL    |                |
| initiative        | int(11)       | YES  |     | NULL    |                |
| organization      | int(11)       | YES  |     | NULL    |                |
| comments          | varchar(5000) | YES  |     | NULL    |                |
+-------------------+---------------+------+-----+---------+----------------+
```

* there are dummy professor account entries exist containing `{ "Laplace-Bot", "bot", any, any }` and `{ "Bayes-Bot", "bot", any, any }`

##2021.04.01
* refactor common behavior of all SQL queries into a generic switchboard function
* utilize prepared statements to remove SQL injection vulnerabilities
* add notice of potential pitfalls for quick reference
* temporarily remove query option relying on incorrect physical model
