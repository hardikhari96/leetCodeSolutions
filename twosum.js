/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let lastIndex = nums.length - 1;
        let currentBlock = nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                let nextBlock = nums[j]
                if (target == (nextBlock + currentBlock)) return [i, j]
            }
        }
    }
};


console.log(twoSum([3, 2, 4], 6));