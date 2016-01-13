var array_of_ints =   [100, 0, 9, 1, 1, 5];

// var highest_product = function (ints) {

//     var highest_product = 0;

//     for (var i = 0; i < ints.length; i++) {
//         for (var j = 0; j < ints.length; j++) {
//             for (var k = 0; k < ints.length; k++) {

//                 if (i === j || k === j || k === i) continue;

//                 var product = ints[i] * ints[j] * ints[k];
//                 if (product > highest_product) {
//                     highest_product = product;
//                 }
//             }   
//         }      
//     }

//     return highest_product;
// };

// var highest_product = function (ints) {

//     var biggest_numbers = [0,0,0];

//     var bigger_than_numbers = function (num) {

//         for (var i = 0; i < biggest_numbers.length; i++) {
//             if (num > biggest_numbers[i]) {
//                 return true;
//             }
//         }

//         return false;
//     };

//     var replace_lowest_with = function (num) {

//         var lowest = Infinity;
//         var lowest_index;

//         for (var i = 0; i < biggest_numbers.length; i++) {
//             if (biggest_numbers[i] < lowest) {
//                 lowest_index = i;
//                 lowest = biggest_numbers[i];
//             }
//         }

//         biggest_numbers[lowest_index] = num;
//     }

//     for (var i = 0; i < ints.length; i++) {
//         if (bigger_than_numbers(ints[i])) {
//             replace_lowest_with(ints[i]);
//         }
//     }

//     return biggest_numbers[0] * biggest_numbers[1] * biggest_numbers[2];
// };

var highest_product = function (ints) {

    var lowest_number = ints[0];
    var highest_number = ints[0];
   
    var lowest_number_index = 0;
    var highest_number_index = 0;

    // 1. Find the highest and lowest numbers

    for (var i = 0; i < ints.length; i++) {

        if (ints[i] < lowest_number) {
            lowest_number = ints[i];
            lowest_number_index = i;
        }

        if (ints[i] > highest_number) {
            highest_number = ints[i];
            highest_number_index = i;
        }
    }

    var indices_used_for_lowest_product_of_two;
    var indices_used_for_highest_product_of_two;

    var highest_product_of_two = -Infinity;
    var lowest_product_of_two = Infinity;

    // 2. Find the lowest product of 2

    for (var i = 0; i < ints.length; i++) {

        if (i !== lowest_number_index) {
            var product = ints[i] * lowest_number;

            if (product < lowest_product_of_two) {
                lowest_product_of_two = product;
                indices_used_for_lowest_product_of_two = [lowest_number_index, i];
            }

            if (product > highest_product_of_two) {
                highest_product_of_two = product;
                indices_used_for_highest_product_of_two = [lowest_number_index, i];
            }
        }

        if (i !== highest_number_index) {
            var product = ints[i] * highest_number;

            if (product < lowest_product_of_two) {
                lowest_product_of_two = product;
                indices_used_for_lowest_product_of_two = [highest_number_index, i];
            }

            if (product > highest_product_of_two) {
                highest_product_of_two = product;
                indices_used_for_highest_product_of_two = [highest_number_index, i];
            }            
        }
    }

    var highest_product_of_three = -Infinity;

    // 3. Find the highest product of 3

    for (var i = 0; i < ints.length; i++) {

        if (i !== indices_used_for_highest_product_of_two[0] && i !== indices_used_for_highest_product_of_two[1]) {
            if (highest_product_of_two * ints[i] > highest_product_of_three) {
                highest_product_of_three = highest_product_of_two * ints[i];
            }
        }

        if (i !== indices_used_for_lowest_product_of_two[0] && i !== indices_used_for_lowest_product_of_two[1]) {
            if (lowest_product_of_two * ints[i] > highest_product_of_three) {
                highest_product_of_three = highest_product_of_two * ints[i];
            }
        }
    }

    return highest_product_of_three;
}

console.log(highest_product(array_of_ints));