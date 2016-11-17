require.config({
	paths: {
		"jquery": "lib/jquery-3.1.1.min",
		"bootstrap": "../common/assets/javascripts/bootstrap",
		"googleMap": "https://maps.googleapis.com/maps/api/js?key=AIzaSyCZZHQ2vAAKXaGPiKCiSkQ1aFrXyhq0sJY",
		"owlCarousel": "lib/owl.carousel",
		"jssocials": "lib/jssocials",
	},
	shim: {
		"bootstrap": {
			"deps": ['jquery'],
			"exports": '$'
		},

		"jssocials": {
			"deps": ['jquery'],
			"exports": '$'
		},
		
		"owlCarousel": {
			"deps": ['jquery'],
			"exports": '$'
		},
	}
});

require(['moduleloader'], function() {

});