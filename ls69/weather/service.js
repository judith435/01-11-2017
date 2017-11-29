weatherApp.service('weatherService', function($http) {
    const apiKey = '';

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