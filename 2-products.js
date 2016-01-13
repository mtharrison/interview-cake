var example = [1, 2, 12, 5, 9];

// var get_products_of_all_ints_except_at_index = function (ints) {

//     var products = [];

//     for (var i = 0; i < ints.length; i++) {

//         products[i] = 1;

//         for (var j = 0; j < ints.length; j++) {
//             if (j === i) continue;
//             products[i] *= ints[j];
//         }      
//     }

//     return products;
// };

var get_products_of_all_ints_except_at_index = function (ints) {

    var products = [];
    var runningTotal = 1;

    for (var i = 0; i < ints.length; i++) {
        if (ints[i - 1] !== undefined) {
            runningTotal *= ints[i - 1];
        }
        products.push(runningTotal);
    }

    var runningTotal = 1;

    for (var i = ints.length - 1; i > -1; i--) {
        if (ints[i + 1] !== undefined) {
            runningTotal *= ints[i + 1];
        }
        products[i] *= runningTotal;
    }

    return products;
};

console.log(get_products_of_all_ints_except_at_index(example));