// 落单的数字 Single Number
// Given an array of integers, every element appears twice except for one. Find that single one.
//     Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
// 整数型数组中，每个元素均出现两次，除了一个元素例外，如何找出这个元素？能否设计一个线性时间的算法，且不需要额外的存储空间？

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i<nums.length; i++)
    {
        result ^= nums[i];
    }
    return result;
};
console.log(singleNumber([1, 1, 2, 2, 4, 4, 5]));