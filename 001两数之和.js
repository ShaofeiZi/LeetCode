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
/**
 * 拿到之后相减 获得结果 去遍历数组 如果有并且和当前不相等  就直接返回
 * N
 * @param nums
 * @param target
 * @returns {*[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        const index = nums.indexOf(complement);
        if (index !== -1) {
            if (index !== i) {
                return [i, index]
            }
        }
    }

};
console.log(twoSum([3, 3], 6));