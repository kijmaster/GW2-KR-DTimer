<?php

class DragonRouter
{
    public static function route ($app) {
        $app->get('/dragons', function(){
            return DragonManager::getDragons();
        });

        $app->get('/dragons/:id', function($id){
            return DragonManager::getDragon($id);
        });
        $app->post('/dragons', function(){
            return DragonManager::addDragon();
        });

        $app->put('/dragons/:id', function($id){
            return DragonManager::updateDragon($id);
        });

        $app->put('/dragons/:id/respawn', function($id){
            return DragonManager::updateDragonRespawnTime($id);
        });
        $app->delete('/dragons/:id/delete', function($id){
            return DragonManager::deleteDragon($id);
        });
    }
}
