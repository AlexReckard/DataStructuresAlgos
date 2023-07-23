 // create a function that will reverse an array
 // and return that reversed array in the console
 
 function reverseArray(arr) {
	arr.reverse();
	return arr;
 }
 
 const nums = [3,2,1];
 const numsRev = reverseArray(nums);
 
 console.log(numsRev);

 
 // [1, 2, 3]