define(['dtimer',
    'underscore',
    'shared/CachedData',
    'menu/model/Menu',
    'menu/view/LoggedMenuView'
], //

    function (DTimer, _, //
              CachedData,
              Menu, //
              LoggedMenuView) {

        return {
            createLoggedMenu: function () {
                var menu = new Menu({lang: store.get('lang')});
                DTimer.menu.show(new LoggedMenuView({model: menu }));
            }
        };
    });
