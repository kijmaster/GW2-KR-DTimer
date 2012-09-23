
define(['dtimer',
        'underscore'],
    function (DTimer, _) {

        return {
            serverURL: '',
            serversList: null,

            // Load servers list from rest service
            getServersList: function (context, callback){
                if (_.isNull(this.serversList)) {
                    var self = this;

                    $.ajax({
                        type: 'GET',
                        url: self.serverURL + 'servers',

                        success: function (serverResponse) {
                            self.serversList = [];
                            _.each(serverResponse.servers, function (item) {
                                self.serversList.push({id: item.id, name: item.name, zone: item.zone});
                            });
                            callback && callback.call(context, self.countriesList, context);
                        },

                        error: function (jqXHR, textStatus) {
                            console.log('Cached Data Error > cannot get servers list: ' + textStatus);
                        }
                    });
                } else {
                    callback && callback.call(context, this.countriesList, context);
                }
            }
        }

    });