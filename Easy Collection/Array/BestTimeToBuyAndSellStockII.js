// Best Time to Buy and Sell Stock II
// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you 
// like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in 
// multiple transactions at the same time (ie, you must sell the stock before you buy again).
// 假设有一个数组，它的第i个元素是一个给定的股票在第i天的价格。设计一个算法来找到最大的利润。你可以完成尽可能多的交易(多次买卖股票)。
// 然而,你不能同时参与多个交易(你必须在再次购买前出售股票)。
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    const leng = prices.length - 1;
    for (let i = 0; i < leng; i++) {
        const diff = prices[i + 1] - prices[i];
        if (diff > 0) {
            profit += diff;
        }
    }
    return profit;

};
console.log(maxProfit([1, 2, 3]));