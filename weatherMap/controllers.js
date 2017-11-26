weatherMap.controller('weatherPanel', function showWeatherL($scope, weatherService)  {
    $scope.getWeather = function()  {
        var city = $scope.cityWeather;
        weatherService.getWeather(city, function(forecastRecieved) {
            $scope.weatherForecast = forecastRecieved;
        });
    }
    
    weatherMap.config(function($routeProvider) {
        $routeProvider
        .when("/New York", {
          //  cityWeather = "New York"  
        }) 
        .when('/London', {
          //  cityWeather = "London"  
        })
        .when('/Zurich', {
           // cityWeather = "Zurich"  
        })
    
        getWeather();
        
    });
});



