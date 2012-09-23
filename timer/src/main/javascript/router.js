define(['backbone',
        'dtimer',
        'server/server',
        'menu/menu'],

    function (Backbone,
              DTimer,
              ServerModule,
              MenuHelper) {

        var AppRouter = Backbone.Router.extend({
            routes: {
                '' : 'menu'
                //'server/:serverId' : 'server'
            },

            menu: function(){

                // Create menu
                MenuHelper.createLoggedMenu();

            }
        });

        // Init router for servers page
        //var serverRouter = new ServerModule.serverRouter();

        return AppRouter;
    });