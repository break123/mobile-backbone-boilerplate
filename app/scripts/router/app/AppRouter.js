define( function( require ) {

	// Dependencies
	var nav = require( 'navigator' ),
		ItemListView = require( 'item-list-view' ),
		DetailView = require( 'detail-view' );

	// Defining the application router, you can attach sub routers here.
	var AppRouter = Backbone.Router.extend({

		initialize: function(options) {
			nav.init(options);
		},
		
		routes: {
			'!/animals': 'list',
			'!/animals/:id': 'detail',
			'*actions': 'list'
		},

		list: function() {
		


			this.itemListView = this.itemListView || new ItemListView({
			}).bind( 'close', function() {
				this.itemListView.unbind();
				this.itemListView = null;
			}, this );

			nav.showView({ 
				view: this.itemListView/*,
				header: 'pet-duel',
				backButton: { type: 'menu', route: '#' }*/
			});
		},

		detail: function( id ) {
			this.detailView = this.detailView || new DetailView({
				detailId: id
			}).bind( 'close', function() {
				this.detailView.unbind();
				this.detailView = null;
			}, this );

			nav.showView({
				view: this.detailView
			});
		}

	});

	return AppRouter;

});
