// Two Sum
// Difficulty: Easy
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//         You may assume that each input would have exactly one solution, and you may not use the same element twice.
        
//         You can return the answer in any order.
function twoSum(nums, target){
    var temp;

    for(i=0;i<= nums.length; i++){
        temp = target - nums[i];
        var index = nums.indexOf(temp);
        if(index !== -1 && index !== i){
            return [i, index];
        }
    }
}

nums = [2,5,7,11];
target = 9
result = twoSum(nums, target)
console.log(result);