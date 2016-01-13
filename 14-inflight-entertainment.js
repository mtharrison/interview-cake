var Assert = require('assert');

// Brute force approach O(n^2) where n is number of movies

// var movies_can_last_flight_length = function (flight_length, movie_lengths) {

//     for (var i = 0; i < movie_lengths.length; i++) {
//         for (var j = 0; j < movie_lengths.length; j++) {
//             if (i === j) continue;
//             if (movie_lengths[i] + movie_lengths[j] === flight_length)
//                 return true;
//         }    
//     }

//     return false;
// };

var movies_can_last_flight_length = function (flight_length, movie_lengths) {

    var movie_map = [];

    for (var i = 0; i < movie_lengths.length; i++) {
        if (movie_map[flight_length - movie_lengths[i]])
            return true;

        movie_map[movie_lengths[i]] = true;
    }

    return false;
};

Assert(movies_can_last_flight_length(100, [10, 50, 60, 20, 80]) === true);
Assert(movies_can_last_flight_length(100, [10, 50, 60, 20])     === false);
