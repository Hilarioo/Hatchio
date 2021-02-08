# Credentials Folder

## The purpose of this folder is to store all credentials needed to log into your server and databases. This is important for many reasons. But the two most important reasons is
    1. Grading , servers and databases will be logged into to check code and functionality of application. Not changes will be unless directed and coordinated with the team.
    2. Help. If a class TA or class CTO needs to help a team with an issue, this folder will help facilitate this giving the TA or CTO all needed info AND instructions for logging into your team's server. 


# Below is a list of items required. Missing items will causes points to be deducted from multiple milestone submissions.

1. Server URL or IP:http://ec2-18-191-99-183.us-east-2.compute.amazonaws.com:3000/
2. SSH username: ssh -i "guest-acc.pem" guest-acc@ec2-18-191-99-183.us-east-2.compute.amazonaws.com
3. SSH password or key.[Located in Current Folder]
   <br> If a ssh key is used please upload the key to the credentials folder.
4. Database URL or IP and port used.: 3306 (by default - check by running mysql> SHOW VARIABLES WHERE Variable_name = 'hostname'; as sudo mysql) 
   <br><strong> NOTE THIS DOES NOT MEAN YOUR DATABASE NEEDS A PUBLIC FACING PORT.</strong> But knowing the IP and port number will help with SSH tunneling into the database. The default port is more than sufficient for this class.
5. Database username:{myroot}
6. Database password:{goose10}
7. Database name (basically the name that contains all your tables): database:"acme" table:"users"
8. Instructions on how to use the above information.
   -project is hosted at http://ec2-18-191-99-183.us-east-2.compute.amazonaws.com:3000  
   -to ssh into aws server, make sure to have .pem file inside terminal directory  
   -in the directory where pem file is located, type ssh -i "guest-acc.pem" guest-acc@ec2-18-191-99-183.us-east-2.compute.amazonaws.com in the console and press enter.  
   -in order to access root files, make sure you change the current directory to /home/ubuntu by entering "cd /home/ubuntu".  

# Most important things to Remember
## These values need to kept update to date throughout the semester. <br>
## <strong>Failure to do so will result it points be deducted from milestone submissions.</strong><br>
## You may store the most of the above in this README.md file. DO NOT Store the SSH key or any keys in this README.md file.
