define(['jquery'], function() {
	$(document).
	on('click', '.js-save-data', function(evt) {
		evt.preventDefault();
		var $target = $('#testWebStorage');
		var str = $target.val();
		sessionStorage.setItem("message", str);
		localStorage.setItem("message", str);
	}).
	on('click', '.js-restore-data', function(evt) {
		evt.preventDefault();
		var $target = $('#testWebStorage');

		var sessionItem = sessionStorage.getItem("message");
		var localItem = localStorage.getItem("message");
		if(sessionItem != null)
			$target.val(sessionItem);
		else
			$target.val(localItem);
	}).
	on('click', '.js-save-message-note', function(evt) {
		evt.preventDefault();
		var msg = $('#msgTextarea').val();
		var time = new Date().getTime();

		localStorage.setItem(time, msg);
		loadStorage('#msg');
	}).
	on('click', '.js-clear-all-message-note', function(evt) {
		evt.preventDefault();
		localStorage.clear();
		$('#msg').empty();
		loadStorage('#msg');
	});

	var loadStorage = function(id) {
		var $result = $('<table class="table table-bordered"></table>');
		for(var i = 0; i < localStorage.length; i++) {
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var date = new Date();
			date.setTime(key);
			var daStr = date.toGMTString();
			var $tr = $('<tr><td>' + daStr + '</td><td>' + value + '</td></tr>');
			$result.html($tr);
		}

		var $target = $(id);
		$target.append($result);
	};

})