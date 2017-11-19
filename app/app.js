var john = angular.module('john', ['ngRoute']);

john.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "books.html"
    }) 
    .when('/order', {
        templateUrl: 'order.html'
    })
    .when('/contact', {
        templateUrl: 'contact.html'
    })
});



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

john.service('cartService', function () {
    this.booksInCart = [];
    this.addToCart = function(x) {
        this.booksInCart.push(x);
       // alert(JSON.stringify(this.booksInCart));
    };
});

john.controller('book', function Book($scope, cartService) {
    $scope.myHusband = 'Chaim Ilson';
    $scope.bookArray = [
        {name:"cooking", isbn:"1", image:"images/Chrysanthemum.jpg"},
        {name:"eating", isbn:"2", image:"images/Tulips.jpg"},
        {name:"cleaning", isbn:"3", image:"images/Desert.jpg"},
        {name:"baking", isbn:"4", image:"images/Hydrangeas.jpg"},
        {name:"washing", isbn:"5", image:"images/Jellyfish.jpg"},
        {name:"ironing", isbn:"6", image:"images/Koala.jpg"},
        {name:"moping", isbn:"7", image:"images/Penguins.jpg"},
        {name:"rinsing", isbn:"8", image:"images/Lighthouse.jpg"}];
        
    $scope.addItem = function(name, $event)  {
        cartService.addToCart(name);
        $event.target.disabled = true;
        $event.target.style.backgroundColor = "cyan";
    }  
});

john.controller('showCart', function Book($scope, cartService) {
    $scope.getCart = function()  {
        alert(JSON.stringify(cartService.booksInCart));
    }  

});

// john.controller('showCartCtrl', function showCartCtrl($scope, cartService) {
//     $scope.getCart = function() {
//         $scope.items = cartService.getItemsInCart();
//     }
// });


// john.controller('buyCtrl', function showCartCtrl($scope, cartService, orderService) {
john.controller('buyCtrl', function showCartCtrl($scope, cartService) {
        $scope.user = {
        firstname: 'judy',
        lastname: 'ilson',
        address: 'har not'
    }

    $scope.order = function() {
       // orderService.placeOrder($scope.user, cartService.getItemsInCart())
    }
});