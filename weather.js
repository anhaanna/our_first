$(document).ready(function(){
	$('#city').on('input', function(){
		var city = $('#city').val();
		 if (city != "") {
		 	$.ajax({
		 		url:"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" +
		 		 "&APPID=7326349b9a064839e6fdb3533df3902d", 
		 		type: "GET",
		 		dataType: "jsonp",
		 		success: function(data){
		 			// console.log(data);
		 			var file = show(data);
		 			$('#show').html(file);
		 			//$('#city').val('');
		 			$('#error').html('');
		 		}
		 	});
		 }
		 else {
		 	$('#error').html('Error! Field is empty.')
		 }
	});

});

 function show(data){
 	return "<h2>Current Weather for "+ data.name +", "+ data.sys.country + "</h2>" +
 		   "<h3><b>Weather</b>: "+ data.weather[0].main +" </h3>" +
 		   "<h3><b>Description</b>: <img src='http://openweathermap.org/img/w/"+ data.weather[0].icon +".png'> "+ data.weather[0].description +" </h3>" +
 		   "<h3><b>Temperature</b>: "+ data.main.temp +"&deg;C  </h3>" +
 		   "<h3><b>Pressure</b>: "+ data.main.pressure +" </h3>" +
 		   "<h3><b>Humidity</b>: "+ data.main.humidity +" </h3>" +
 		   "<h3><b>Min_temperature</b>: "+ data.main.temp_min +"&deg;C </h3>" +
 		   "<h3><b>Max_temperature</b>: "+ data.main.temp_max +"&deg;C </h3>" +
 		   "<h3><b>Wind Speed</b>: "+ data.wind.speed +" m/s </h3>" ;

 		   


 }







