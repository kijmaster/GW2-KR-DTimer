define(['backbone.marionette',
    'underscore',
    'dtimer', //
    'helpers/pagination', //
    'server/model/Dragon',
    'server/view/DragonResultView', //
    'hbs!templates/server/server-dragons-template'],

    function (Marionette,
              _,
              DTimer, //
              PaginationHelper,
              DragonModel,
              DragonResultView,
              ServerDragonsTemplate) {

        var LocalModel = Backbone.Model.extend({});

        var DragonResultsView = Backbone.Marionette.CompositeView.extend({
            template: {
                type: 'handlebars',
                template: ServerDragonsTemplate
            },

            itemView: DragonResultView,
            events: {
                'click a.page': 'page'
            },

            page: function (e) {
                e.preventDefault();
                if (this.collection.currentPage != e.currentTarget.innerHTML) {
                    this.collection.goTo(e.currentTarget.innerHTML);
                    var lastPage = Math.ceil(this.collection.sortedAndFilteredModels.length / this.collection.perPage);
                    var currentPage = this.collection.currentPage;
                    PaginationHelper.createPaginationLink(currentPage, lastPage, $('.pagination'));
                }
            },

            appendHtml: function (collectionView, itemView) {
                collectionView.$(".results").append(itemView.el);
            }


        });

        return DragonResultsView;

    });