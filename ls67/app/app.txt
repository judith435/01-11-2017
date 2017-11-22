var app = angular.module('my-app', []);


app.service('cartService', function () {
    this.booksInCart = [];
    this.addToCart = function (x) {
        this.booksInCart.push(x);
    };

    this.getItemsInCart = function() {
        return JSON.stringify(this.booksInCart);
    }
});

app.service('orderService', function () {
    this.placeOrder = function(user, books) {
        console.log(user);
        console.log(books);
    }
});

app.controller('booksCtrl', function booksCtrl($scope, cartService) {
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
        lastname: ''
    }

    $scope.order = function() {
        orderService.placeOrder($scope.user, cartService.getItemsInCart())
    }
});