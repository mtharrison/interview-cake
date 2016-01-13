var prices = [
    999,
    234,
    6,
    2,
    0,
];

// var getBestProfit = function (prices) {

//     var numCalcs = 0; 
//     var bestProfit = null;
//     var numPrices = prices.length;
//     var i, k, profit, low, high;

//     for (i = 0; i < numPrices; i++) {
//         for (j = i + 1; j < numPrices; j++) {
//             profit = prices[j] - prices[i];
//             if (!bestProfit || profit > bestProfit) {
//                 low = prices[i];
//                 high = prices[j];
//                 bestProfit = profit;
//             }
//         }      
//     }

//     return [low, high, bestProfit];
// };

// More efficient

var getBestProfit = function (prices) {

    var numPrices = prices.length;
    var maxProfit = 0;
    var lowestPrice = prices[0];

    for (i = 1; i < numPrices; i++) {
        
        if (prices[i] - lowestPrice > maxProfit) {
            maxProfit = prices[i] - lowestPrice;
        }

        if (prices[i] < lowestPrice) {
            lowestPrice = prices[i];
        }
    }

    return [0,0,maxProfit];
}

var trade = getBestProfit(prices);

console.log('The best trade was to buy at %d, sell at %d. The profit was %d.', trade[0], trade[1], trade[2]);

//  6 => 15
// 12 => 66