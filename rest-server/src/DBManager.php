<?php

class DBManager
{
    // Replace with your database configuration
    public static function getDb(){
        $host = "127.0.0.1";
        $user="root";
        $pass="";
        $name="krdtimer";
        $dbh = new PDO("mysql:host=$host;dbname=$name;charset=UTF-8", $user, $pass);
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $dbh;
    }
}
