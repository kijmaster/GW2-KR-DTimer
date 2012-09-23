define(['backbone',
    'underscore',
    'dtimer',
    'menu/menu',

    function (Backbone,
              _,
              DTimer,
              MenuHelper){

        return DTimer.module('Server', function(Server){
            Server.serverRouter = Backbone.Router.extend({

                routes: {
                    '' : 'default'
                    //'server/:serverId' : 'server'
                },

                default: function(){

                    // Create menu
                    MenuHelper.createLoggedMenu();

                },

                server: function(serverId){

                    // Create menu
                    MenuHelper.createLoggedMenu();

                }
            });
        });

    }]);