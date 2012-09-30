define( function( require ) {
	
	var $ = require( 'zepto' ),
		_ = require( 'lodash' ),
		Scaffold = require( 'scaffold' );

	var view = Scaffold.View.extend({
			
			tagName: 'li',
			template: _.template( require( 'text!templates/item.jst' ) ),

			render: function() {
				$( this.el ).html( this.template( this.model.toJSON() ) );
				
				return this;
			}

		});

	return view;	

});