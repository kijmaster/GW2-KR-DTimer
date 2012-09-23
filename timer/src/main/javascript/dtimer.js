define(['backbone.marionette',
        'shared/CachedData'],
    function (Marionette,
                CachedData) {

        var DTimer = new Backbone.Marionette.Application();

        // Initialization of the cache
        CachedData.serverURL = 'http://127.0.0.1/GW2-KR-DTimer/rest-server/index.php/';
        CachedData.getServersList();

        DTimer.addRegions({
            content: "#content",
            menu: "#menu"
        });

        /*
         * Takes an URL as input and a params object.
         * Each property in the params is added to the url as query string parameters
         */
        var encodeURL = function (url, params) {
            var res = url;
            var k, i = 0;
            for (k in params) {
                res += (i++ === 0 ? '?' : '&') + encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
            }
            return res;
        };

        return DTimer;
    });