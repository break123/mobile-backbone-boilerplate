define( function( require ) {

	var Scaffold = require( 'scaffold' );
	
	var model = Scaffold.Model.extend({
		url: function() {
			return '/api/animals/' + this.id + '.json';
		}
	});

	return model;
});