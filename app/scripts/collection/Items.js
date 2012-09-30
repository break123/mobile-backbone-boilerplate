define( function( require ) {
	
	var Item = require('item-model');
	var Scaffold = require('scaffold');

	var collection = Scaffold.Collection.extend({
		model: Item,
		url: '/api/animals.json'
	});

	return collection;

});