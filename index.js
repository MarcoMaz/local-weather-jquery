$(document).ready(function(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      long = position.coords.longitude;
      lat = position.coords.latitude;  
      var api = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=8c0b1f52ce71c1813987d2e6b0ff5d2e';
      $.getJSON(api, function(data){
        var weather = data.weather[0].description,
            longitude = data.coord.lon,
            latitude = data.coord.lat,
            kelvin = data.main.temp,
            celsius = (Math.round((kelvin - 273.15)*100)/100),
            fahr = (Math.round(((kelvin *(9/5)) - 459.7)*100)/100),
            city = data.name,
            icon = "<img src='" + "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png" + "'>";
        $('#city').html(city);
        $('#celsius').html(celsius);
        $('#fahr').html(fahr);
        $('#desc').html(weather);
        $('#icon-weather').html(icon);
        $('button').click(function(){
          $('.go').toggleClass('hide');
          });
      });
    });
  };
});