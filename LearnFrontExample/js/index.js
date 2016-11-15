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
	});

	var $window = $(window)
	var $body = $(document.body)

	var navHeight = $('.navbar').outerHeight(true) + 10

	$body.scrollspy({
		target: '.tb-sidebar',
		// offset: navHeight
	})

	$window.on('load', function() {
		$body.scrollspy('refresh')
	})

	$('.tb-docs-container a[href="#"]').click(function(e) {
		e.preventDefault()
	})

	// back to top
	setTimeout(function() {
		var $sideBar = $('.tb-sidebar')

		$sideBar.affix({
			offset: {
				top: 0,
			}
		})
	}, 100)

	setTimeout(function() {
		$('.tb-top').affix()
	}, 100)

})