<?php
require 'lib/Slim/Slim/Slim.php';
require 'src/managers/DragonManager.php';
require 'src/routers/DragonRouter.php';

\Slim\Slim::registerAutoloader();

// Build slim
$app = new \Slim\Slim();

DragonRouter::route($app);

// And run it
$app->run();
