define(['backbone.marionette', //
    'dtimer', //
    'server/view/DragonLocalizationView',
    'shared/modal/Hobb',
    'hbs!templates/server/server-dragon-template'],

    function (Marionette, //
              DTimer, //
              LocalizationView,
              Hobb,
              DragonResultTemplate) {

        return Backbone.Marionette.ItemView.extend({
            template: {
                type: 'handlebars',
                template: DragonResultTemplate
            },

            className: 'DragonResult',
            tagName: 'span',

            events: {
            },

            onShow: function(){
                var self = this;

                // Bind event
                $('#toggle-dragon-'+self.model.attributes.id).bind('click', function(event){
                    self.toggleDragonDetails(event, self.model.attributes.id);
                });

                $('#ltab-'+self.model.attributes.id).bind('click', function(event){
                    // Do not prevent has 'click' event also display tab content
                    _.delay(function(){
                        self.showLocalization(undefined);
                    });
                });
            },

            toggleDragonDetails: function(event, objId) {
                var toggle = $('#toggle-dragon-'+objId);
                toggle.text(toggle.text().indexOf('-') != -1 ? toggle.text().replace('-','+') : toggle.text().replace('+','-'));
                $('#dragon-supercontainer-'+objId).slideToggle();
                if (event) event.preventDefault();
                return false;
            },

            showLocalization: function(event){
                if(typeof event !== 'undefined'){
                    event.preventDefault();
                }

                var modalHeigh = Math.round($(window).height() * 0.5);
                var modalWidth = Math.round($(window).width() * 0.5);

                var LocalModel = Backbone.Model.extend({});
                var lModel = new LocalModel({
                                carto_link: this.model.attributes.carto_link,
                                modalHeigh: modalHeigh,
                                modalWidth: modalWidth});
                var lView = new LocalizationView({model: lModel});
                /*lView.model.set('modalHeigh',modalHeigh);
                lView.model.set('modalWidth', modalWidth);*/
                Hobb.modal(lView);
            }

        });
    });
