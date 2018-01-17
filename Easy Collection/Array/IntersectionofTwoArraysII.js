// #  两个数组相交 二 Intersection of Two Arrays II

// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // // 跟踪每一个数字在第一个列表中出现的次数 记录成表
    // var store = nums1.reduce(function(map, n) {
    //     map[n] = (map[n] + 1) || 1;
    //     return map;
    // }, {});
    // return nums2.filter(function(n) {
    //     //  如果在第一个列表中出现过 就返回这个数 并且将出现的次数减一
    //     if (store[n]) {
    //         store[n]--;
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });
    let hash = {};
    let intersection = [];

    for (let i = 0; i < nums1.length; i++) {
        hash[nums1[i]] = hash[nums1[i]] || 0;
        hash[nums1[i]]++;
    }

    for (let i = 0; i < nums2.length; i++) {
        if (hash[nums2[i]]) {
            hash[nums2[i]]--;
            intersection.push(nums2[i]);
        }
    }

    return intersection;
};

console.log(intersect([61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81],
    [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]));