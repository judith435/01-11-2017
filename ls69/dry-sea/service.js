app.service('dryWaterService', function($http) {
    var debugMode = true;
    
    this.getDryOrWater = function(coords, onSuccess, onError) {

        if (debugMode) {
            setTimeout(function() {
                const mockObj = {
                    data: {
                        "lat": coords.lat,
                        "lon": coords.lon,
                        "water": Math.ceil(Math.random()*10) % 2 == 0
                    }
                }

                onSuccess(mockObj);
            }, 1 * 1000)
        } else {
            $http({
                url: `https://api.onwater.io/api/v1/results/${coords.lat},${coords.lon}`,
                method: 'GET'
            }).then(onSuccess, onError);
        }
       
    }
});

/*

*/