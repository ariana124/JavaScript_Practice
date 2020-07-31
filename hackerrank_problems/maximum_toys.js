// Complete the maximumToys function below.

function maximumToys(prices, toy) {
    // [1,2,3,4,5] // budget 7
    // 3
    let toyCount = 0;

    let totalBudget = 0;

    for (let i = 0; i < prices.length; i++) {

        if (prices[i] <= toy) {
            if ((totalBudget + prices[i]) <= toy ) {
                totalBudget += prices[i];
                toyCount += 1;
            }
        }
    }

    return toyCount;
}
