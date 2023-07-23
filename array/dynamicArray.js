/*Problem:

You need to create a dynamic 2-dimensional array, seqList, of n empty arrays. All arrays are zero-indexed. You're given q queries. Each query is one of the following two types:

Query: 1 x y
Compute idx = (x ^ lastAnswer) % n.
Append the integer y to seqList[idx].

Query: 2 x y
Compute idx = (x ^ lastAnswer) % n.
Compute value = seqList[idx][y % seqList[idx].length].
Assign value to lastAnswer.
Store lastAnswer.

Examples:

Example 1:

If n = 2 and queries = [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]], your program should return [7, 3].

Example 2:

If n = 2 and queries = [[1, 0, 5], [1, 0, 7], [1, 0, 3], [2, 0, 1], [2, 0, 2]], your program should return [7, 3].

*/

function dynamicArray(n, queries) {
	// Initialize empty 2D array with n sequences
	let seqList = Array.from({length: n}, () => []);
	// Initialize lastAnswer with 0
	let lastAnswer = 0;
	// Create an array to store the result of each type 2 query
	let result = [];
	
	// loop through each query
	
	for(let q of queries) {
		// Destructure the query into type, x and y
		let type = q[0];
		let x = q[1];
		let y = q[2];
		
		// Calculate the index to use for the operation
        // This is done by taking the XOR of x and lastAnswer,
        // and finding the remainder when divided by n
		let idx = (x ^ lastAnswer) % n;
		
		// If the query type is 1, append y to the sequence at the computed index
		if (type === 1) {
			seqList[idx].push(y);
		}
		
		// If the query type is 2, find the value in the sequence at the computed index,
        // at position y % size of the sequence, assign it to lastAnswer,
        // and add it to the result array
		else if(type === 2) {
			lastAnswer = seqList[idx][y % seqList[idx].length];
			result.push(lastAnswer);
		}
	}
	
	// After all queries have been processed, return the result array
	return result;
		
		
		
		
};
	
	
};
