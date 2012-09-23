define(['dtimer',
    'underscore',
    'menu/model/Menu',
    'menu/view/LoggedMenuView'
], //

    function (Emerging, _, //
              Menu, //
              LoggedMenuView) {

        return {
            createLoggedMenu: function () {
                var menu = new Menu({lang: store.get('lang'), memberId: store.get('memberId')});
                Emerging.menu.show(new LoggedMenuView({model: menu }));
            }
        };
    });
