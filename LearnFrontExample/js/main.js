require.config({
	paths: {
		"jquery": "lib/jquery-3.1.1.min",
		"bootstrap": "../common/assets/javascripts/bootstrap",
	},
	shim: {
		"bootstrap": {
			"deps": ['jquery'],
			"exports": '$'
		},
	}
});

require(['moduleloader'], function() {

});