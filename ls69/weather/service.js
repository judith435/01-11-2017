weatherApp.service('weatherService', function($http) {
    const apiKey = 'e06a2f3d21ca934dc5a82ff8ba8ec0d8';

    this.getDataByCityName = function(cityName, onSuccess, onError ) {
        $http({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            method: 'GET',
            params: {
                q: cityName,
                appid: apiKey,
                units: 'metric'
            }
        }).then(onSuccess, onError);
    }
});