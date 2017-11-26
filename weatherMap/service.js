weatherMap.service('weatherService', function($http) {
  //  this.weatherForecast;
    this.getWeather = function (city, success) { 
        alert(city);
        $http({
            method : "GET",
            url : "http://api.openweathermap.org/data/2.5/weather",
            params: {
                        q: city,
                        appid: '51fd2319b7ea415b30d60b563e78e71f'
            }
        }).then(success, error);
        
    }

    function error(response) {
        alert("Sorry Error occured in call to weather");
    }

});
