<?php

class KillRouter
{
    public static function route ($app) {
        $app->get('/kills', function(){
            return KillManager::getAllKills();
        });
        $app->get('/kills/:dragonId/:serverId', function($dragonId, $serverId){
            return KillManager::getKillsForAndFrom($dragonId, $serverId);
        });
        $app->get('/kills/last/:dragonId/:serverId', function($dragonId, $serverId){
            return KillManager::getLastKillsForAndFrom($dragonId, $serverId);
        });
        $app->post('/kills', function(){
            return KillManager::addKill();
        });
    }
}
