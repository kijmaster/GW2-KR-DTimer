define(['backbone',
    'underscore',
    'dtimer',
    'helpers/pagination',
    'menu/menu',
    'server/model/Dragon',
    'server/collection/DragonResults',
    'server/view/DragonResultsView',
    'server/layout/ServerLayout'],

    function (Backbone,
              _,
              DTimer,
              PaginationHelper,
              MenuHelper,
              DragonModel,
              DragonCollection,
              DragonResultsView,
              ServerLayout){

        return DTimer.module('Server', function(Server){
            Server.serverRouter = Backbone.Router.extend({

                routes: {
                    'server/:serverId' : 'displayServer'
                },

                displayServer: function(serverId){

                    // Create menu
                    MenuHelper.createLoggedMenu();


                    // Load servers list & set it to given model
                    $.ajax({
                        type: 'GET',
                        url: store.get('rootUrl') + 'dragons',
                        dataType: "json",

                        success: function (dragonResponse) {

                            var serverLayout = new ServerLayout();
                            DTimer.content.show(serverLayout);

                            var self = this;
                            var dragonResults = [];

                            _.each(dragonResponse, function (dragon){
                                var dragonObj = new DragonModel({id: dragon.id,
                                                                name: dragon.name,
                                                                carto_link: dragon.carto_link});
                                $.ajax({
                                    type: 'GET',
                                    url: store.get('rootUrl') + '/kills/' + dragon.id + '/' + serverId,
                                    dataType: "json",

                                    success: function(killResponse) {
                                        dragonObj.set('lastKill', killResponse.time);
                                    }
                                });
                                dragonResults.push(dragonObj);
                            });

                            var dragonCollection = new DragonCollection(dragonResults);
                            dragonCollection.perPage = 10;
                            dragonCollection.currentPage = 1;
                            dragonCollection.totalPages = Math.ceil(dragonCollection.length / dragonCollection.perPage);
                            dragonCollection.pager();
                            var lastPage = dragonCollection.totalPages;
                            var currentPage = 1;


                            serverLayout.server_result.show(new DragonResultsView({collection: dragonCollection}));

                            PaginationHelper.createPaginationLink(currentPage, lastPage, $('.pagination'));

                        }
                    });


                    //serverLayout.server_result.show(new DragonResultsView({collection: dragonResults}));

                }
            });
        });

    });