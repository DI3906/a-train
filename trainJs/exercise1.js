// Create a function that takes in an array of numbers and returns the sum of its cubes.

// EXAMPLE
// sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

function sumOfCubes(nums) {
    let elevation = nums.map((x) => Math.pow(x, 3));
    
    let result = elevation.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return result
}

const numsArr = []
sumOfCubes(numsArr)