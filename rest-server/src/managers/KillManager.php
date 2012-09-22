<?php

class KillManager
{
    // Return all kills for given dragon id from given server id
    public static function getKillsForAndFrom ($dragonId, $serverId) {
        $sql = "SELECT * FROM kill WHERE id_dragon = :idDragon AND id_server = :idServer ORDER BY time";
        try{
            $db = DBManager::getDb();
            $stmt = $db->prepare($sql);
            $stmt->bindParam("idDragon", $dragonId);
            $stmt->bindParam("idServer", $serverId);
            $stmt->execute();
            $kills = $stmt->fetchAll(PDO::FETCH_OBJ);
            $db = null;
            echo '{ "kills" : ' . json_encode($kills) . '}';
        }catch(PDOException $e){
            echo '{ "error": { "text":' . $e->getMessage() . '}}';
        }
    }

    // Get all kills ordered by server, dragon and time
    public static function getAllKills (){
        $sql = "SELECT * FROM kill ORDER BY id_server, id_dragon, time";
        try{
            $db = DBManager::getDb();
            $stm = $db->query($sql);
            $kills = $stm->fetchAll(PDO::FETCH_OBJ);
            $db = null;
            echo '{ "kills" : ' . json_encode($kills) . '}';
        }catch(PDOException $e){
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }

    // Return last kill of given dragon id from given server id
    public static function getLastKillsForAndFrom ($dragonId, $serverId) {

        $sql = "SELECT * FROM kill WHERE id_dragon = :idDragon AND id_server = :idServer ORDER BY time";
        try{
            $db = DBManager::getDb();
            $stmt = $db->prepare($sql);
            $stmt->bindParam("idDragon", $dragonId);
            $stmt->bindParam("idServer", $serverId);
            $stmt->execute();
            $kill = $stmt->fetchObject();
            $db = null;
            echo json_encode($kill);
        } catch(PDOException $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }

    // Add dragon
    public static function addKill () {
        $request = \Slim\Slim::getInstance()->request();
        $kill = json_decode($request->getBody());
        $sql = "INSERT INTO kill (id_dragon, id_server, id_user, time) VALUES (:dragonId, :serverId, 0, :time)";
        try {
            $db = DBManager::getDb();
            $stmt = $db->prepare($sql);
            $stmt->bindParam("dragonId", $kill->id_dragon);
            $stmt->bindParam("serverId", $kill->id_server);
            $stmt->bindParam("time", $kill->time);
            $stmt->execute();
            $db = null;
            echo json_encode($kill);
        } catch(PDOException $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }

}
