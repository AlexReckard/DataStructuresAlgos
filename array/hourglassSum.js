 //  you want to find the hourglass sum in a 2D array (6x6).
 // There are 16 hourglasses in arr . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr , then print the maximum hourglass sum. The array will always be 6x6.
 
 
function hourglassSum(arr) {
    let maxSum = -Infinity;  // Start with the smallest possible value

    // Iterate over the 2D array, but stop 2 rows/columns early to avoid going out of bounds
    for(let i = 0; i < arr.length - 2; i++) {
        for(let j = 0; j < arr[i].length - 2; j++) {

            // Calculate the sum for the hourglass at (i, j)
            let currentSum = arr[i][j] + arr[i][j+1] + arr[i][j+2]
                            + arr[i+1][j+1] 
                            + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            
            // Update maxSum if the current hourglass sum is larger
            if(currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }

    return maxSum;
}

// Define a 6x6 array to test the function
let arr = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

// Pass the array to the function and print the result
console.log(hourglassSum(arr)); // It should print 28
