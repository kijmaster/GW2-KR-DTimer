define(['underscore',
        'shared/view/HobbView',
        'hbs!templates/server/server-dragon-localization-template'],

    function (_,
              AbstractView,
              ContentTemplate){

        return AbstractView.extend({
            template: ContentTemplate,
            className: 'Message',
            tagName: 'li',
            title: '',
            receiverId: '',

            attachEventsTo : function (element){
            }

        });
    })