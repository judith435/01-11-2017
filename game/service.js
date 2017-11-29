gameApp.service('geoService', function($http) {
     // this.weatherForecast;
      this.getLocation = function (x, y, success) { 
          $http({
              method : "GET",
              url : "https://api.onwater.io/api/v1/results/" + x + "," + y,
          }).then(success, error);
          
      }
  
      function error(response) {
          alert("Sorry Error occured in call to geoAPI");
      }
  
  });
  