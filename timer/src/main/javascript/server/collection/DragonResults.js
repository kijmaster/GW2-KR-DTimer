define(['backbone', 'dtimer', 'underscore', 'paginator', //
    'server/model/Dragon'],

    function (Backbone, //
              DTimer, //
              _, //
              Paginator, //
              DragonResult) {

        return  Backbone.Paginator.clientPager.extend({
            model: DragonResult,

            paginator_ui: {
                firstPage: 1,
                currentPage: 1,
                perPage: 8,
                totalPages: 1
            },

            paginator_core: {
                type: 'GET',
                dataType: 'json'
            },

            parse: function (response) {
                this.totalPages = Math.ceil(response.length / this.perPage);
                return response;
            }
        });
    });

