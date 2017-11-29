gameApp.controller('gamePanel', function location($scope, geoService)  {
    $scope.waterCounter = 0;
    $scope.landCounter = 0;
    $scope.waterFound = false;
    $scope.landFound = false;

    $scope.getLocation = function()  {
        call_geoService();
    }

    $scope.randomLocation = function()  {
        $scope.xCoordinate = Math.floor(Math.random() * 180);
        $scope.yCoordinate = Math.floor(Math.random() * 90);
        call_geoService();
    }

    function call_geoService() {
        
        geoService.getLocation($scope.xCoordinate, $scope.yCoordinate, 
            function(locationRecieved) {
            if(locationRecieved.data.water) { //water found
                $scope.waterCounter ++;
                $scope.waterFound = true;
                $scope.landFound = false;
            }
            else { //land found
                $scope.landCounter ++;
                $scope.waterFound = false;
                $scope.landFound = true;
            }
            alert("water found: " + locationRecieved.data.water + " water counter: " + $scope.waterCounter + " land counter: " + $scope.landCounter);
        });
    }
});
