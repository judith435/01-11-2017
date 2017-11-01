var john = angular.module('john', []);

john.controller('math', function Math($scope) {
  $scope.myFirstVar = 'Judith Ilson';
});

john.controller('bryce', function Bryce($scope) {
    $scope.myFirstVar = 'Meir Ilson';
    $scope.myArr = [
        'avigail',
        'noa',
        'yiska',
        'ayalanpm'
    ]
});

john.controller('book', function Book($scope) {
    $scope.myHusband = 'Chaim Ilson';
    $scope.bookArray = [
        {book:"cooking", name:"judy", image:"images/Chrysanthemum.jpg"},
        {book:"eating", name:"chaim", image:"images/Tulips.jpg"}]
});