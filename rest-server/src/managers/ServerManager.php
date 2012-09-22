<?php
//require 'src/DBManager.php';

class ServerManager
{
    // Return server collection
    public static function getServers () {
        $sql = "SELECT * FROM server ORDER BY zone, name";
        try{
            $db = DBManager::getDb();
            $stm = $db->query($sql);
            $servers = $stm->fetchAll(PDO::FETCH_OBJ);
            $db = null;
            echo '{ "servers" : ' . json_encode($servers) . '}';
        }catch(PDOException $e){
            echo '{ "error": { "text":' . $e->getMessage() . '}}';
        }
    }
}
