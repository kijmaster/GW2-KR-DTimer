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
            },

            menu: function(){
                // Create menu
                MenuHelper.createLoggedMenu();
            }
        });

        app = new AppRouter();

        var serverRouter = new ServerModule.serverRouter();

        return AppRouter;
    });