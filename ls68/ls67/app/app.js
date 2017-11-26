var app = angular.module('my-app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "books.html"
    })
    .when('/order', {
        templateUrl: 'order.html'
    })
});

app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = firebase.database().ref();
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
});

app.controller('booksCtrl', function booksCtrl($scope, cartService) {
    $scope.bestSeller = 234;
    $scope.books = [
        {
            isbn: 123,
            name: 'a Book 1',
            img: {
                src: 'https://docs.angularjs.org/img/angularjs-for-header-only.svg',
                width: '250px'
            }
        },
        {
            isbn: 234,
            name: 'a Book 2',
            img: {
                src: 'https://docs.angularjs.org/img/angularjs-for-header-only.svg',
                width: '100px'
            }
        },
        {
            isbn: 345,
            name: 'a Book 3',
            img: {
                src: 'https://docs.angularjs.org/img/angularjs-for-header-only.svg',
                width: '150px'
            }
        }
    ];

    $scope.addItem = function(isbn) {
        cartService.addToCart(isbn);
    }
    
});

app.controller('showCartCtrl', function showCartCtrl($scope, cartService) {
    $scope.getCart = function() {
        $scope.items = cartService.getItemsInCart();
    }
});

app.controller('buyCtrl', function showCartCtrl($scope, cartService, orderService) {
    $scope.user = {
        firstname: '',
        lastname: '',
        address: ''
    }

    $scope.order = function() {
        orderService.placeOrder($scope.user, cartService.getItemsInCart())
    }
});