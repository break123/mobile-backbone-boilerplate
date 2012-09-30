define( function( require ) {

	// Dependencies.
	var $			= require( 'zepto' ),
		_			= require( 'lodash' ),
		app			= require( 'app' ),
		Scaffold	= require( 'scaffold' ),
		ItemView	= require( 'item-view' ),
		Items		= require( 'item-collection' );

	var ItemListView = Scaffold.View.extend({
		
		tagName: 'section',
		id: 'item-list-section',
		className: 'vflex scrolling',

		template: _.template( require( 'text!templates/list.jst' ) ),

		events: {},

		initialize: function() {
			this.resetViews = false;

			this.items = new Items();

			this.bindTo( this.items, 'add', this.addOne );
			this.bindTo( this.items, 'reset', this.addAll );

			app.trigger( 'header:update', {
				title: 'Choose your weapon!'
			});

			this.items.fetch();
		},

		render: function() {
			this.$el.html( this.template() );
			
			this.trigger( 'ready' );

			return this;
		},

		addOne: function(item) {
			var view = new ItemView({ model: item });
			
			view.render();
			this.$( 'ul' ).append( view.el );
			this.addChild( view );
		},

		addAll: function() {
			this.disposeChildren();
			this.items.each( this.addOne, this );
		}
	
	});

	return ItemListView;

});