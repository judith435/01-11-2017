app.controller('homeCtrl', function($scope, dryWaterService) {
    $scope.coords = {};

    $scope.getDryWater = function() {
        function onSuccess(response) {
            console.log(response);
        };

        function onError(response) {
            console.log(response);
        };
        dryWaterService.getDryOrWater($scope.coords, onSuccess, onError);
    }
  
});
