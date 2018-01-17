// Plus One 加一运算
// Given a non-negative number represented as an array of digits, plus one to the number.
//
//  The digits are stored such that the most significant digit is at the head of the list.
//
// 十进制加一 塞到一维数组里
//
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const m = digits.length;
    for(let i = m-1;i>=0;--i){
        if(digits[i]<9){
            ++digits[i];
            return digits;
        }
        digits[i]=0;
    }
    let res=new Array(m+1);
    res[0]=1;
    return res;
};

console.log(plusOne([9]));