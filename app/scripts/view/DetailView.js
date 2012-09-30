define( function( require ) {

	var $ = require( 'zepto' ),
		_ = require( 'lodash' ),
		app = require( 'app' ),
		Scaffold = require( 'scaffold' );

	var Detail = require( 'detail-model' );

	var DetailView = Scaffold.View.extend({

		tagName: 'section',
		id: 'detail-section',
		className: 'vflex scrolling',

		template: _.template( require( 'text!templates/detail.jst' ) ),
		
		events: {},

		initialize: function( options ) {
			this.resetViews = false;

			this.model = new Detail({ id: options.detailId });
			
			app.trigger( 'header:update', {
				title: 'Weapon selected...'
			});
			
			this.bindTo( this.model, 'change', this.populate );
		},

		render: function() {
			this.model.fetch();
			
			return this;
		},

		populate: function() {
			this.$el.html( this.template( this.model.toJSON() ) );
			
			app.trigger( 'header:update', {
				title: this.model.get( 'name' )
			});

			this.trigger( 'ready' );

			return this;
		}

	});

	return DetailView;

});