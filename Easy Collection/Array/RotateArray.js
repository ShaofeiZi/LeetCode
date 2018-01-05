// 旋转数组  Rotate Array
// Rotate an array of n elements to the right by k steps.
//
//     For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
//
//     Note:
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
//
//     [show hint]
//
// Hint:
//     Could you do it in-place with O(1) extra space?
//     Related problem: Reverse Words in a String II
//
// Credits:
//     Special thanks to @Freezen for adding this problem and creating all test cases.
// 例如，
// 给定n = 7和k = 3，数组[1,2,3,4,5,6,7]会被旋转成[5,6,7,1,2,3,4]。
//
// 批注：
// 尽你可能尝试多种解决方案，这里至少存在3种不同的方式去解决这个问题。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 不符合  新构造数组了
// var rotate = function (nums, k) {
//     const temp1 = nums.slice(-k);
//     const temp2 = nums.slice(0,nums.length - k);
//     nums= [...temp1, ...temp2];
// };
    //  还是不行
// var  rotate = function (nums, k) {
//     let tmp = [];
//     if (k){
//         tmp = nums.slice(-k);
//         nums.splice(-k, k);
//         Array.prototype.unshift.apply(nums, tmp);
//     }
//
// };
    // 过了
// var rotate = function (nums, k) {
//         let i = nums.length - 1;
//         for (let x = 0; x < k; x++) {
//             nums.unshift(nums[i]);
//             nums.pop();
//         }
//     }
//
var rotate=function(nums,k){
        nums.unshift(...nums.splice(nums.length  - (k % nums.length),(k % nums.length)));
        console.log(nums);
    }
rotate([1, 2, 3, 4, 5, 6, 7], 3);