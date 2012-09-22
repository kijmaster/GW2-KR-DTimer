<?php
require 'lib/Slim/Slim/Slim.php';
require 'src/DBManager.php';
require 'src/managers/DragonManager.php';
require 'src/managers/ServerManager.php';
require 'src/managers/KillManager.php';
require 'src/routers/DragonRouter.php';
require 'src/routers/ServerRouter.php';
require 'src/routers/KillRouter.php';

\Slim\Slim::registerAutoloader();

// Build slim
$app = new \Slim\Slim();

ServerRouter::route($app);
DragonRouter::route($app);
KillRouter::route($app);

// And run it
$app->run();
