define(['jquery', 'bootstrap'], function($) {

	$(document).on('click', '.js-lunch-modal', function() {
		$('#singleModal').modal('show', {
			title: "Just a test",
			message: $('#myTest').clone(),
			modalSize: "for test"
		});
	});

	$(document).ready(function() {
		$("#myNav").affix({
			offset: {
				top: 125
			}
		});
		var $demo = $('.demo');
		$demo.append('<h1>This is a test content</h1>');
	});

})