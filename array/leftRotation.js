 /*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */
 
 // slice and spread approach

function rotateLeft(d, arr) {
    // The slice method extracts a section of the array, from index `d` to the end.
    // This becomes the first part of the new array.
    // If `d` is 2, and the array is [1, 2, 3, 4, 5], this extracts [3, 4, 5].
    const firstPart = arr.slice(d);

    // Then, slice the array from index 0 to `d`.
    // This becomes the second part of the new array.
    // If `d` is 2, and the array is [1, 2, 3, 4, 5], this extracts [1, 2].
    const secondPart = arr.slice(0, d);

    // Then use the spread operator (`...`) to concatenate the two parts of the array,
    // effectively rotating the array to the left by `d`.
    // If firstPart is [3, 4, 5] and secondPart is [1, 2], this creates [3, 4, 5, 1, 2].
    return [...firstPart, ...secondPart];
}

const array = [1, 2, 3, 4, 5];
const rotations = 2;
const rotatedArray = rotateLeft(rotations, array);
console.log(rotatedArray);  
// Outputs: [3, 4, 5, 1, 2]



// for loop approach

//function rotateLeft(d, arr) {
    //let result = [];
    //for(let i = 0; i < arr.length; i++) {
        // Shift indices and use modulo operator to avoid going out of bounds
     //  result[i] = arr[(i + d) % arr.length];
    //}
   // return result;
//}