/**
 * 粗暴遍历 N方
 * @param nums
 * @param target
 * @returns {*[]}
 */
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }；
var search = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = parseInt((left + right) / 2);
        console.log('mid', mid)
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        const index = search(nums, complement)
        if (index !== -1) {
            return [i, index]
        }
    }
}
/**
 * 拿到之后相减 获得结果 去遍历数组 如果有并且和当前不相等  就直接返回
 * N
 * @param nums
 * @param target
 * @returns {*[]}
 */
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         const index = nums.indexOf(complement,i+1)
//         if (index !== -1) {
//             return [i, index]
//         }
//     }
// };
console.log(twoSum([3, 2, 4], 6));