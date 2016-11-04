define(['jquery'], function($) {

	var drawCircle = function(id) {
		var $canvas = $(id);
		if($canvas.length == 0)
			return false;
		var context = $canvas.get(0).getContext('2d');
		context.fillStyle = "#EEEEFF";

		var n = 0;
		for(var i = 0; i < 10; i++) {
			context.beginPath();
			context.arc(i * 25, i * 25, i * 5, 0, Math.PI * 2, false);
			context.closePath();
			context.fillStyle = 'rgba(255,0,0,0.25)';
			context.fill();
		}
	};

	var drawImage = function(id) {
		var $canvas = $(id);
		if($canvas.length == 0)
			return false;
		var context = $canvas.get(0).getContext('2d');
		var image = new Image();
		image.src = "http://wow.tgbus.com/UploadFiles_2396/200912/2009121009565878.jpg";
		image.onload = function() {
			context.drawImage(image, 0, 0, 720, 480);
		}
	};

	var myContext;
	var width, height;
	var i;
	var drawAnimate = function(id) {
		var $canvas = $(id);
		if($canvas.length == 0)
			return false;
		myContext = $canvas.get(0).getContext('2d');
		width = $canvas.width();
		height = $canvas.height();
		i=0;
		setInterval(rotate,100);
	};
	var rotate = function() {
		myContext.clearRect(0,0,width,height);
		myContext.fillStyle="red";
		myContext.fillRect(i,0,20,20);
		i=i+20;
	};

	drawCircle('#canvas');
	drawImage('#drawImage');
	drawAnimate('#drawAnimate');

	return {
		drawCircle: drawCircle
	}
})