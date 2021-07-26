/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let ans = nums[0];
    let sum = 0;
    for (const num of nums) {
        if (sum > 0) {
            sum += num;
        } else {
            sum = num;
        }
        console.log(ans, sum)
        ans = Math.max(ans, sum);
    }
    return ans;
};
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums))