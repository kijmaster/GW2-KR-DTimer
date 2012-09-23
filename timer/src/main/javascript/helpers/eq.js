define('helpers/eq', ['Handlebars', 'underscore', 'dtimer'],
    function (Handlebars, _, DTimer) {

        function eq(string1, string2, options) {
            if (string1 === string2) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        }


        Handlebars.registerHelper('eq', eq);

        /**
         * This helper provides a if inline comparing two values.
         *
         * If the two values are strictly equals ('===') return the returnValue
         * argument, '' otherwise.
         *
         * Usage: class='{{ifequalsinline type "details" "active"}}' or class='{{ifequalsinline type "details" "active" "inactive"}}'
         */
        Handlebars.registerHelper('ifequalsinline', function(value1, value2, returnValTrue, options) {
            var returnValFalse = '';
            if(arguments.length == 5) {returnValFalse = options}
            return (value1 === value2) ? returnValTrue : returnValFalse;
        });
    });