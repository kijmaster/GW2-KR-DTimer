define(['backbone',
        'dtimer',
        'server/server'],

    function (Backbone,
              DTimer,
              ServerModule) {

        var AppRouter = Backbone.Router.extend({});

        // Init router for servers page
        var serverRouter = new ServerModule.serverRouter();

        return AppRouter;
    });