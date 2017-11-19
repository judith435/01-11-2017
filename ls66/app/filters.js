app.filter('capitalize', function () {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return function (input) {

        for (let i = 0; i < input.length; i++) {
            input[i].name = capitalizeFirstLetter(input[i].name);
        }

        return input;
    }
});

app.filter('lowerify', function () {
    function lowerFirstLetter(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }

    return function (input) {
        for (let i = 0; i < input.length; i++) {
            input[i].name = lowerFirstLetter(input[i].name);
        }

        return input;
    }
});

app.filter('bestseller', function () {
    

    return function (input, bestIsbn) {
        
        for (let i=0; i < input.length; i++) {
            if (input[i].isbn == bestIsbn)
                input[i].isbn = input[i].isbn + ' Best seller!';
        }

        return input;
    }
});
