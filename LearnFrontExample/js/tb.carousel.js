define(['jquery', 'owlCarousel'], function($) {
	$(document).ready(function() {

		$("#owl-demo").owlCarousel({

			itemsDesktop: [5000, 4],
			itemsDesktopSmall: [1100, 4],
			itemsTablet: [768, 4],
			itemsMobile: [480, 1],
			lazyLoad: true,

			navigation: true,
			navigationText: ["<span class='icon-left-arrow'></span>", "<span class='icon-right-arrow'></span>"],
			pagination: true,
			scrollPerPage: true,
		});

	});
})