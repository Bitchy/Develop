define(['jquery'], function(){
	$(document).
	on('click', '.js-save-data', function(evt){
		evt.preventDefault();
		var $target = $('#testWebStorage');
		var str = $target.val();
		sessionStorage.setItem("message", str);
		localStorage.setItem("message", str);
	}).
	on('click', '.js-restore-data', function(evt){
		evt.preventDefault();
		var $target = $('#testWebStorage');
		
		var sessionItem = sessionStorage.getItem("message");
		var localItem = localStorage.getItem("message");
		if(sessionItem != null)
			$target.val(sessionItem);
		else
			$target.val(localItem);
	});
	
})