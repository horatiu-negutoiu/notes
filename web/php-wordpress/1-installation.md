# Web / PHP-Wordpress / Installation

## Linux - LAMP

- Install Webmin
- Use Webmin to install Apache2 server
- Use Webmin to install Mysql/MariaDB


## Windows - XAMPP

- Install XAMPP;
- Start the XAMPP Control Panel as an administrator;
- Install Apache and MySQL as a service;
- Start Apache and MySQL servers;
- Test that that you can access PhpMyAdmin;
- Create a new db, noting down the credentials; Give the user necessary access;
- Download Wordpress from their website;
- Make a new directory inside `XAMPP/htdocs` (eg. `wp-site`) and decompress Wordpress archive there since it's the fastest way to development (alternative is to add another website to the `htdocs.config`);
- Copy/paste the `wp-config-sample.php` and rename to `wp-config.php`;
- Edit `wp-config.php` with the database details configured previously;
- Browse to `http://localhost/wp-site`



