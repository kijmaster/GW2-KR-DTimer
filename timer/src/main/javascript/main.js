require.config({
    paths: {
        i18nprecompile: 'vendor/i18nprecompile',
        hbs: 'vendor/hbs',
        underscore: 'vendor/underscore',
        'underscore.string': 'vendor/underscore.string',
        backbone: 'vendor/backbone',
        'backbone.marionette': 'vendor/backbone.marionette',
        'backbone.marionette.handlebars': 'vendor/backbone.marionette.handlebars',
        Handlebars: 'vendor/handlebars-1.0.beta.6',
        templates: '../assets/templates',
        translations: '../assets/translations',
        dtimer: 'dtimer',
        router: 'router',
        paginator: 'vendor/backbone.paginator'
    },

    hbs: {
        templateExtension: 'html',
        disableI18n: true,
        i18nDirectory: 'translations/',
        helperPathCallback: function (name) {
            return 'helpers/eq';
        }
    },

    locale: store.get('lang') || 'en'
});


require(['backbone',
        'backbone.marionette',
        'backbone.marionette.handlebars',
        'Handlebars',
        'router',
        'shared/CachedData'],

    function (Backbone,
              Marionette,
              MarionetteHandlebars,
              Handlebars,
              AppRouter,
              CachedData) {

        $(function(){
            new AppRouter();

            store.set('rootUrl', CachedData.serverURL);

            $.ajaxSetup({
                cache: false,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Accept-Language', store.get('lang'));
                }
            });

            $(document).ready(function () {
                Backbone.history.start();
            });
        });
    });