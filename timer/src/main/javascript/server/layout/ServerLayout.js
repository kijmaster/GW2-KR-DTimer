define(['backbone.marionette', //
    'dtimer', //
    'hbs!templates/server/server-layout-template'],
    function (Marionette, //
              DTimer, //
              ServerLayoutTemplate) {

        var ServerLayout = Backbone.Marionette.Layout.extend({
            template: {
                type: 'handlebars',
                template: ServerLayoutTemplate
            },

            regions: {
                server_head: 'server_head',
                server_result: '.server_result'
            }
        });

        return ServerLayout;
    });