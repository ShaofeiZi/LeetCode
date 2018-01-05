// 是否包含重复的 Contains Duplicate
// Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
// 给定一个整数数组，查找数组是否包含任何重复项。如果任何值至少在数组中出现两次，则函数应该返回true，如果每个元素都不相同，则它应该返回false。
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums = nums.sort();
    let bl = false;
    // let temnum = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            bl = true;
        } else {
            // temnum.push(nums[i])
        }
    }
    return bl
};
containsDuplicate([1,2,2,2,3,4,5,8,7]);