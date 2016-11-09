define(['jquery'], function($) {
	$(document).
	on('click', '.js-update-cache', function() {
		$('#cacheMsg').html('I am new!');
	});
	//Only Opera10 support the applicationCache.update
	$(document).
	ready(function() {
		setInterval(function() {
			applicationCache.update();
		}, 5000);
		applicationCache.addEventListener('updateready', function() {
			//Manualy update local cache
			applicationCache.swapCache();
			location.reload();
		}, true);
	});
})