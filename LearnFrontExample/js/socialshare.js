define(['jquery', 'jssocials'], function($) {
	$("#mySocialShare").jsSocials({
		showLabel: false,
		showCount: false,
		shareIn: "popup",
		shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
	});

	$(document).
	on('click','.social-share-link', function(evt) {
		evt.preventDefault();
		var $elm = $(this);
		var $shareLinks = $elm.next('.share-links');
		
		
		$shareLinks.toggleClass('hidden');
	});
})