const nums = [-1, 0, 3, 5, 9, 12], target = 9
// var search = function(nums, target) {
//     return nums.indexOf(target)
// };

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
console.log(search(nums, target))