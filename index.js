function hasTargetSum(array, target) {
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      sum = array[i] + array[j];
      if(sum === target)
      return true;
      else sum = 0;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

  Given an input array of n elements, the worst case scenario is that 
  the algorithm needs to make n^2 iterations.
*/

/* 
  Add your pseudocode here

  take one number from the input array
    add it to each of the other numbers in the input array to find the sum
      compare the sum to the target
        if they are equal -> return true
        if none of the sums is equals to the target -> return false  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting true");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5, 6, 7], 11));

  console.log("");
  console.log("Expecting false");
  console.log("=>", hasTargetSum([12, 22, 19, 9, 17, 27, 36], 1024));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
