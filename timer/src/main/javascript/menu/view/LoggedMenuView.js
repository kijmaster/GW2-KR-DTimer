define(['backbone.marionette', 'dtimer', //
    'hbs!templates/menu/navigation-bar-template'],

    function (Marionette, DTimer, //
              Template) {

        return Backbone.Marionette.ItemView.extend({
            template: {
                type: 'handlebars',
                template: Template
            },

            className: 'inner',

            events: {
            },

            changeLanguage: function () {
                //store.set('lang', $("#lang").attr('value'));
                //location.reload();
            },

            initialize: function () {
                var self = this;

                // Load servers list & set it to given model
                $.ajax({
                    type: 'GET',
                    url: store.get('rootUrl') + 'servers/zones',
                    dataType: "json",

                    success: function (serverResponse) {
                        self.model.set('zonesList', serverResponse);
                        self.render();
                    }
                });

            }

        });
    });