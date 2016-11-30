define(['jquery', 'bootstrap'], function($) {

	$(document).on('click', '.js-lunch-modal', function() {
		$('#singleModal').modal('show', {
			title: "Just a test",
			message: $('#myTest').clone(),
			modalSize: "for test"
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
				top: function() {
					return $('.header').height();
				},
			}
		})
	}, 100)

	setTimeout(function() {
		$('.tb-top').affix()
	}, 100)

	$(document).
	on('click', '.navbar .header .header-banner-common.-left a', function(e) {
		e.preventDefault()
		var $elm = $(this);
		var $span = $elm.find('span');
		var $form = $elm.parent('form');
		var $input = $form.find('input');
		var $middle = $form.find('.-middle');

		$input.toggleClass('actived')

		if($span.hasClass('fade-out')) {
			$span.addClass("fade-in");
			$span.removeClass("fade-out");
		} else if($span.hasClass('fade-in')) {
			$span.addClass('fade-out');
			$span.removeClass("fade-in");
		}

		if($middle.hasClass('fade-out')) {
			$middle.addClass("fade-in");
			$middle.removeClass("fade-out");
		} else if($middle.hasClass('fade-in')) {
			$middle.addClass('fade-out');
			$middle.removeClass("fade-in");
		}
		if($input.hasClass('actived')) {
			$input.focus();
		}
	}).
	on('click', '.tb-sidenav li.active a', function(e) {
		
		var $elm = $(this);

		$elm.toggleClass('dropup');
	}).
	on('click', '.tb-sidenav li', function() {
		var $elm = $(this);
		var $link = $elm.find('a');
		var $activedLi = $elm.parent('ul').find('li.actived');
		var $subMenu = $elm.parents('.tb-sidebar').next('.sub-menu');
		var $docContainer = $elm.parents('.tb-docs-container');
		var $rightMenu = $docContainer.find('.right-sub-menu');
		var $overlay = $('.overlay');

		if($activedLi)
			$activedLi.removeClass('actived');

		if(!$elm.hasClass('actived'))
			if(!$elm.hasClass('more-less')) {
				$elm.addClass('actived');
			} else {
				$subMenu.toggleClass('show-up');

				if($rightMenu.hasClass('right-fly-out')) {
					$rightMenu.removeClass('right-fly-out');
				} else {
					overlayFunction();
				}

				if($overlay.hasClass('hidden'))
					$link.html('<i class="glyphicon glyphicon-indent-left"></i> more');
				else
					$link.html('<i class="glyphicon glyphicon-indent-left"></i> less');
			}
	}).
	on('click', '.overlay', function() {
		var $elm = $(this);
		var $docContainer = $elm.siblings('.tb-docs-container');
		var $subMenu = $docContainer.find('.sub-menu');
		var $rightMenu = $docContainer.find('.right-sub-menu');
		var $link = $docContainer.find('.tb-sidebar .tb-sidenav .more-less a');

		$subMenu.removeClass('show-up');
		$elm.addClass('hidden');
		$('body').attr('style', 'overflow-y: auto;');
		$rightMenu.removeClass('right-fly-out');
		$link.html('<i class="glyphicon glyphicon-indent-left"></i> more');
	}).
	on('click', '.header .search-form .-middle', function() {
		var $elm = $(this);
		var $docContainer = $elm.parents('.tb-docs-nav').next('.tb-docs-container');
		var $rightMenu = $docContainer.find('.-login-out');

		$rightMenu.toggleClass('right-fly-out');
		overlayFunction();
	}).
	on('click', '.tb-docs-container .right-sub-menu .title-box .btn-close', function() {
		var $elm = $(this);
		var $rightSubMenu = $elm.parents('.right-sub-menu');
		

		$rightSubMenu.toggleClass('right-fly-out');
		overlayFunction();
	}).
	on('click', '.tb-docs-nav .header .-right .-login a', function(e) {
		e.preventDefault()
		var $elm = $(this);
		var $docContainer = $elm.parents('.tb-docs-nav').next('.tb-docs-container');
		var $rightSubMenu = $docContainer.find('.-login-out');

		$rightSubMenu.toggleClass('right-fly-out');
		overlayFunction();
	}).
	on('click', '.tb-docs-nav .header .-right .-cart a', function(e) {
		e.preventDefault()
		var $elm = $(this);
		var $docContainer = $elm.parents('.tb-docs-nav').next('.tb-docs-container');
		var $rightSubMenu = $docContainer.find('.-my-cart');

		$rightSubMenu.toggleClass('right-fly-out');
		overlayFunction();
	});

	var overlayFunction = function() {
		var $overlay = $('.overlay');
		$overlay.toggleClass('hidden');
		if($overlay.hasClass('hidden'))
			$('body').attr('style', 'overflow-y: auto;');
		else
			$('body').attr('style', 'overflow-y: hidden;');
	};
})