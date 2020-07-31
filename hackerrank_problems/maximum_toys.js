/**
 * maximumToys - function that counts the maximum number of toys that can be bought given
 * @prices: an array of integers representing toy prices
 * @budget: an integer representing the budget
 * Return: the maximum number of toys
 */
function maximumToys(prices, budget) {

    let toyCount = 0;

    let totalAmount = 0;

    for (let i = 0; i < prices.length; i++) {

        if (prices[i] <= budget) {
            if ((totalAmount + prices[i]) <= budget ) {
                totalAmount += prices[i];
                toyCount += 1;
            }
        }
    }

    return toyCount;
}


console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));
