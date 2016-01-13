var Assert = require('assert');

var number_of_ways_to_make_change = function (amount, coins) {

    if (amount === 0) {
        return 1
    }

    if (amount < 0) {
        return 0;
    }

    if (coins.length === 0) {
        return 0;
    }

    console.log('Checking ways to make %d with %s', amount, coins);

    var currentCoin = coins[0];
    var remainingCoins = coins.slice(1);



}

Assert(number_of_ways_to_make_change(4, [1,2,3]) === 4);