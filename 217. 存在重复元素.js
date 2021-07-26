/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const rest = {}
    let r = false
    for (let i = 0; i < nums.length; i++) {
        if (rest[nums[i]]) {
            r = true;
            break
        } else {
            rest[nums[i]] = 1
        }
    }
    return r

};
console.log(containsDuplicate([1, 2, 3, 1]))