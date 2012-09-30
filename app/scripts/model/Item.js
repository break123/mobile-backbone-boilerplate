define( function( require ) {
	
	var Scaffold = require( 'scaffold' );

	var model = Scaffold.Model.extend({
		
		defaults: {
			id: null,
			name: "Animal"
		}

	});
	
	return model;	

});