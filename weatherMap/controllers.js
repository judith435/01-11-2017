weatherMap.controller('weatherPanel', function showWeatherL($scope, weatherService)  {
    $scope.getWeather = function()  {
        var city = $scope.cityWeather;
        weatherService.getWeather(city, function(forecastRecieved) {
            $scope.weatherForecast = forecastRecieved;
        });
    }  
});
