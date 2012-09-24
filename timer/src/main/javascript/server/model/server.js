define(['backbone'],

    function (Backbone) {

        return Backbone.Model.extend({

            default: {
                id: 1,
                dragonsList: null
            }
        });
    });
