define(['jquery'], function($) {
	var $confModal = $('<div>', {
		'id': 'singleModal',
		'class': 'modal fade -single-modal'
	}).
	append(
		$('<div>', {
			'class': 'modal-dialog modal-md'
		}).append(
			$('<div>', {
				'class': 'modal-content'
			}).html('<div class="modal-header">' +
				'<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>' +
				'<h4 class="modal-title"></h4>' +
				'</div>' +
				'<hr>' +
				'<div class="modal-body"></div>')
		)
	);

	$('body').append($confModal);

	$(document).
	on('show.bs.modal', '#singleModal', function(e) {
		var title = (e.relatedTarget ? e.relatedTarget.title : null) || '';
		var message = (e.relatedTarget ? e.relatedTarget.message : null) || '';
		var modalSize = (e.relatedTarget ? e.relatedTarget.modalSize : null) || 'modal-md';

		$confModal.find('.modal-dialog').remove('modal-lg modal-md modal-sm').addClass(modalSize);

		$('.modal-title', '#singleModal').text(title);
		$('.modal-body', '#singleModal').html(message);
	}).
	on('hidden.bs.modal', '#singleModal', function(e) {
		// reset modal
		$('.modal-title', '#singleModal').empty();
		$('.modal-body', '#singleModal').empty();

		$confModal.find('.modal-dialog').remove('modal-lg modal-md modal-sm').addClass('modal-md');
	});
});