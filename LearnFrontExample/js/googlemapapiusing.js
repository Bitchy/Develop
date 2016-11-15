define(['jquery','googleMap'], function() {
	$(document).ready(function() {
		var mymap = document.getElementById('googleMap');

						if(mymap) {
							navigator.geolocation.getCurrentPosition(function(position) {
								var coords = position.coords;
								var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
								var myOptions = {
									zoom: 14,
									center: latlng,
									mapTypeId: google.maps.MapTypeId.ROADMAP
								};
								var mapl = new google.maps.Map(mymap, myOptions);
								var marker = new google.maps.Marker();
								marker.setPosition(latlng);
								marker.setMap(mapl);
								var infowindow = new google.maps.InfoWindow({
									content: "Current Position!"
								});
								infowindow.open(mapl, marker);
							}, function(error) {
								console.log(error);
							});
						};
		//		if(mymap) {
		//
		//			
		//			var latlng = new google.maps.LatLng(51.508742,-0.120850);
		//			var myOptions = {
		//				zoom: 14,
		//				center: latlng,
		//				mapTypeId: google.maps.MapTypeId.ROADMAP
		//			};
		//			var mapl = new google.maps.Map(mymap, myOptions);
		//			var marker = new google.maps.Marker();
		//			marker.setPosition(latlng);
		//			marker.setMap(mapl);
		//			var infowindow = new google.maps.InfoWindow({
		//				content: "Current Position!"
		//			});
		//			infowindow.open(mapl, marker);
		//
		//		};
	});
})