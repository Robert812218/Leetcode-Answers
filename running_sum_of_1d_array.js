/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let hodl = 0;
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        const newSum = nums.slice(0, [i + 1]).reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            hodl
        );
        newArr.push(newSum);
    }
    return newArr;
};
