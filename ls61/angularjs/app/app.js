// Define the `john` module
var john = angular.module('john', []);

john.controller('math', function Math($scope) {
  $scope.myFirstVar = 'My name';
});

john.controller('bryce', function Bryce($scope) {
    $scope.myFirstVar = 'My name2';
    $scope.myArr = [
        'david',
        'haim',
        'dudu'
    ]
});