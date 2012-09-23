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
                //'change #lang': 'changeLanguage'
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

                //TODO use this for put focus on current view on refresh
                //var currentRoute = Backbone.history.fragment;

            }

        });
    });