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

    // Return server collection sorted by zones
    public static function getServersByZones () {

        $sql = "SELECT * FROM server ORDER BY zone, name";
        try{
            $db = DBManager::getDb();
            $stm = $db->query($sql);
            $servers = $stm->fetchAll(PDO::FETCH_OBJ);
            $db = null;
            echo json_encode(ServerManager::splitServersByZones($servers));
        }catch(PDOException $e){
            echo '{ "error": { "text":' . $e->getMessage() . '}}';
        }
    }

    private static function splitServersByZones ($servers){
        $zones = array();
        $curZone = array();
        $zoneServers = array();
        $curZoneName = "";
        foreach($servers as $server){
            // New Zone to manage
            if($server->zone != $curZoneName){
                if(sizeof($zoneServers) > 0){
                    $curZone['name'] = $curZoneName;
                    $curZone['servers'] = $zoneServers;
                    $zones[] = $curZone;
                }
                $curZoneName = $server->zone;
                $curZone = array();
                $zoneServers = array();
            }
            // Add current server to current zone
            $zoneServers[] = $server;
        }
        // Add last zone
        if(sizeof($zoneServers) > 0){
            $curZone['name'] = $curZoneName;
            $curZone['servers'] = $zoneServers;
            $zones[] = $curZone;
        }
        return $zones;
    }
}
