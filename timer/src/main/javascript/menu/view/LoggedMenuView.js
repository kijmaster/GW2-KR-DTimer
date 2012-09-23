define(['backbone.marionette', 'dtimer', //
    'hbs!templates/menu/navigation-bar-template'],

    function (Marionette, DTimer, //
              Template) {

        return Backbone.Marionette.ItemView.extend({
            template: {
                type: 'handlebars',
                template: Template
            },

            className: 'inner',

            events: {
                //'change #lang': 'changeLanguage'
            },

            changeLanguage: function () {
                //store.set('lang', $("#lang").attr('value'));
                //location.reload();
            }

            /*
            subscriber: function callback(response) {
                if (response.status === 200 && response.state === 'messageReceived') {
                    var data = response.responseBody;

                    console.log('Atmosphere polling result: ' + data);
                    if (JSON.parse(data).unread_msgs !== null) {
                        $('.badge').css('visibility', 'visible');
                        $('span.badge_number').html(JSON.parse(data).unread_msgs);

                        $.ajax({
                            type: 'GET',
                            url: store.get('rootUrl') + 'conversations/' + store.get('memberId'),
                            dataType: 'json',

                            success: function (response) {
                                _.each(response, function (conversationData) {
                                    var numberOfNewMessage = conversationData.unread_msgs - $('#num_msgs_' + conversationData.conversation.id).text();
                                    *//* if (conversationData.unread_msgs && conversationData.unread_msgs > 0) {
                                     $('#' + conversationData.conversation.id).css('visibility', 'visible');
                                     $('#num_msgs_' + conversationData.conversation.id).text(conversationData.unread_msgs);
                                     }*//*
                                    var conversation = new Backbone.Model(conversationData.conversation);
                                    conversation.set("unreadMessages", conversationData.unread_msgs > 0);
                                    conversation.set("numUnreadMessages", conversationData.unread_msgs);
                                    conversation.set("mostRecentMessage", conversationData.most_recent_msg);
                                    var conversationWith = conversation.get('initiator') === store.get('memberId') ? conversation.get('recipient') : conversation.get('initiator');
                                    var isMembersBlocked = _.isNull(conversation.get('membersBlocked')) ? 0 : conversation.get('membersBlocked').length;
                                    var otherThanMeStatus = conversation.get('initiator') === store.get('memberId') ? 'recipientStatus' : 'initiatorStatus';
                                    conversation.set('conversationWith', conversationWith);
                                    conversation.set('memberBlocked', isMembersBlocked !== 0);
                                    conversation.set('otherThanMeStatus', conversation.get(otherThanMeStatus));
                                    Emerging.MessageViewAgregator.trigger('addConversation', conversation, numberOfNewMessage);
                                });

                            },

                            error: function (error) {
                                console.log('Could not update unread msgs counters!');
                            }
                        });
                    }

                    response.request.requestCount = 0;
                }
            },

            initialize: function () {
                var self = this;
                var urlLocation = '/api/upstream';

                $.ajax({
                    type: 'GET',
                    url: store.get('rootUrl') + 'unreadMessages/count',
                    dataType: "json",

                    success: function (response) {
                        self.model.set('unread_msgs', response);
                        self.render();
                    }
                });


                $.atmosphere.subscribe(urlLocation, this.subscriber, $.atmosphere.request = { transport: 'polling', reconnectInterval: 10000 });

                //TODO use this for put focus on current view on refresh
                var currentRoute = Backbone.history.fragment;

            }*/

        });
    });