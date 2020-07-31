/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    // Set removes duplicates in an array.
    return new Set(nums).size;
};


console.log(removeDuplicates([1,2,2,3,4]));
