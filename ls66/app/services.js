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