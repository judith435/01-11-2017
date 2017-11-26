john.filter("capitalize", function() {

    return function(input) {

        var results = [];
        var output;
        for (let i = 0; i < input.length; i++) { 
            output = input[i];
            output.name = input[i].name.toUpperCase();
            results.push(output);
        }
        return results;
    }


});

john.filter("bestseller", function() {
    
        return function(input, bestISBN) {
    
            for (let i = 0; i < input.length; i++) { 
                if (input[i].isbn == bestISBN){
                    input[i].isbn = input[i].isbn + "  >>> BEST SELLER <<<";
                }
                else {
                    input[i].isbn = input[i].isbn.replace('  >>> BEST SELLER <<<','');;
                }

            }
            return input;
        }
    
    
    });