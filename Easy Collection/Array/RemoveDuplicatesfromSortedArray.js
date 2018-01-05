// Remove Duplicates from Sorted Array


// Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// Example:
// Given nums = [1,1,2],
// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the new length.

// 给定一个排序数组，在原数组中删除重复出现的数字，使得每个元素只出现一次，并且返回新的数组的长度。

// 不要使用额外的数组空间，必须在原地没有额外空间的条件下完成。


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums === null || nums.length === 0) {
        return 0;
    }
    let size = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[size]) {
            nums[++size] = nums[i];
        }
    }
    return size + 1;
};
console.log(removeDuplicates([1, 1, 2]));
