/**let arr = [3,4,1,5,10,9];


 * if the callback of sort function returns a negative value
 *      - the first argument is put first and then the second argument
 * else if the callback of the sort function returns a positive value
 *      - the second argument is put first and then the first argument
 * 
 

 * 
 * x = 4
 * y = 5
 * (x, y) => x - y
 * 4 - 5 -> -ve
 * 
 * [4, 5]
 * 
 * 
 * x = 7
 * y = 3
 * (x, y) => x - y
 * 7 - 3 -> +ve
 * 
 * [3, 7]


arr.sort((x, y) => x - y); // increasing


console.log(arr);


 * 
 * x = 4
 * y = 5
 * (x, y) => y - x
 * 5 - 4 -> +ve
 * 
 * [5, 4]
 * 
 * 
 * x = 7
 * y = 3
 * (x, y) => y - x
 * 3 - 7 -> -ve
 * 
 * [7, 3]

arr.sort((x, y) => y - x); // decreasing

console.log(arr);
*/

/*
977. Squares of a Sorted Array
Solved
Easy
Topics
Companies
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 

Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length;
    for(let i=0; i<n; i++){
        nums[i]=nums[i]**2
    }
    nums.sort((x, y) => x - y)
    return nums;
};