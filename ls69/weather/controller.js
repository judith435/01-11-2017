weatherApp.controller('homeCtrl', function($scope) {
    $scope.cities = [
        'jerusalem',
        'paris',
        'netanya',
        'budapest',
        'tehran',
        'london',
        'milano'
    ];
});

weatherApp.controller('weatherCtrl', function($scope, $routeParams, weatherService) {

    let city = $routeParams.id;

    function onSuccess(res) {
        $scope.climateData = res.data;
    }

    function onError(res) {
        console.log('error');
        console.log(res);
    }

    if (city) {
        $scope.city = city;

        weatherService.getDataByCityName(city, onSuccess, onError);
    }
    else {

        $scope.cityName = 'jerusalem'; // DEBUG ONLY
        $scope.climateData = {};

        $scope.viewWeather = function() {
            weatherService.getDataByCityName($scope.cityName, onSuccess, onError );
        }
    }
});