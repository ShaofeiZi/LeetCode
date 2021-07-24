const nums = [3, 6, 5, 1, 8];
var maxSumDivThree = function (nums) {
    const sumNum = [0, 0, 0]
    nums.forEach(element => {
        const a = sumNum[0] + element;
        const b = sumNum[1] + element;
        const c = sumNum[2] + element;
        sumNum[a%3] = Math.max(sumNum[a%3], a);
        sumNum[b%3] = Math.max(sumNum[b%3], b);
        sumNum[c%3] = Math.max(sumNum[c%3], c);
    })
    return sumNum[0];
}
console.log(maxSumDivThree(nums))