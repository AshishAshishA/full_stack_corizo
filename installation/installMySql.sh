#commands to install and check mysql-server
sudo apt install mysql-server
systemctl is-active mysql
sudo mysql_secure_installation
sudo service mysql status
sudo mysql

#Commands of mysql
#	 ALTER USER 'root'@'localhost'
#	IDENTIFIED WITH mysql_native_password BY 'Password123#@!';

#	FLUSH PRIVILEGES;

mysql -u root -p

#command to install workbench
sudo snap install mysql-workbench-community
