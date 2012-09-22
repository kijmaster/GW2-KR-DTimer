<?php

class ServerRouter
{
    public static function route ($app) {
        $app->get('/servers', function(){
            return ServerManager::getServers();
        });
    }
}
