<?php
require 'src/DBManager.php';

class DragonManager
{
    // Return dragon collection
    public static function getDragons () {
        $sql = "SELECT * FROM dragon ORDER BY name";
        try{
            $db = DBManager::getDb();
            $stm = $db->query($sql);
            $dragons = $stm->fetchAll(PDO::FETCH_OBJ);
            $db = null;
            echo '{ "dragons" : ' . json_encode($dragons) . '}';
        }catch(PDOException $e){
            echo '{ "error": { "text":' . $e->getMessage() . '}}';
        }
    }

    // Get dragon by its id
    public static function getDragon ($id) {
        $sql = "SELECT * FROM dragon WHERE id=:id";
        try {
            $db = DBManager::getDb();
            $stmt = $db->prepare($sql);
            $stmt->bindParam("id", $id);
            $stmt->execute();
            $dragon = $stmt->fetchObject();
            $db = null;
            echo json_encode($dragon);
        } catch(PDOException $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }

    // Add dragon
    public static function addDragon () {
        $request = \Slim\Slim::getInstance()->request();
        $dragon = json_decode($request->getBody());
        $sql = "INSERT INTO dragon (id, name, map, carto_link, respawn_time) VALUES ('', :name, :map, :carto_link, :respawn_time)";
        try {
            $db = DBManager::getDb();
            $stmt = $db->prepare($sql);
            $stmt->bindParam("name", $dragon->name);
            $stmt->bindParam("map", $dragon->map);
            $stmt->bindParam("carto_link", $dragon->carto_link);
            $stmt->bindParam("respawn_time", $dragon->respawn_time);
            $stmt->execute();
            $dragon->id = $db->lastInsertId();
            $db = null;
            echo json_encode($dragon);
        } catch(PDOException $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }

    // Update full dragon properties
    public static function updateDragon ($id) {
        $request = \Slim\Slim::getInstance()->request();
        $body = $request->getBody();
        $dragon = json_decode($body);
        $sql = "UPDATE dragon SET name=:name, map=:map, carto_link=:carto_link, respawn_time=:respawn_time WHERE id=:id";
        try {
            $db = DBManager::getDb();
            $stmt = $db->prepare($sql);
            $stmt->bindParam("name", $dragon->name);
            $stmt->bindParam("map", $dragon->map);
            $stmt->bindParam("carto_link", $dragon->carto_link);
            $stmt->bindParam("respawn_time", $dragon->respawn_time);
            $stmt->bindParam("id", $id);
            $stmt->execute();
            $db = null;
            echo json_encode($dragon);
        } catch(PDOException $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }

    // Update dragon respawn time
    public static function updateDragonRespawnTime ($id) {
        $request = \Slim\Slim::getInstance()->request();
        $body = $request->getBody();
        $dragon = json_decode($body);
        $sql = "UPDATE dragon SET respawn_time=:respawn_time WHERE id=:id";
        try {
            $db = DBManager::getDb();
            $stmt = $db->prepare($sql);
            $stmt->bindParam("respawn_time", $dragon->respawn_time);
            $stmt->bindParam("id", $id);
            $stmt->execute();
            $db = null;
            echo json_encode($dragon);
        } catch(PDOException $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }

    // Delete dragon by its id
    public static function deleteDragon($id) {
        $sql = "DELETE FROM dragon WHERE id=:id";
        try {
            $db = DBManager::getDb();
            $stmt = $db->prepare($sql);
            $stmt->bindParam("id", $id);
            $stmt->execute();
            $db = null;
        } catch(PDOException $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }

}
