function maximumSubarraySum(arr, num) {
    if (num > arr.length) {
      return null;
    }
    
    let maxSum = 0;
    let tempSum = 0;
    
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    
    tempSum = maxSum;
    
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    
    return maxSum;
  }

function testMaximumSubarraySum() {
    let input1 = [[100, 200, 300, 400], 2];
    let expectedOutput1 = 700;
    let output1 = maximumSubarraySum(...input1);
    
    console.log('Input: ', input1);
    console.log('Expected Output: ', expectedOutput1);
    console.log('Output: ', output1);
    
    if (output1 !== expectedOutput1) {
      console.log('Test failed: Output is not equal to expected output');
      return;
    }
    
    let input2 = [[1, 4, 2, 10, 23, 3, 1, 0, 20], 4];
    let expectedOutput2 = 39;
    let output2 = maximumSubarraySum(...input2);
    
    console.log('Input: ', input2);
    console.log('Expected Output: ', expectedOutput2);
    console.log('Output: ', output2);
    
    if (output2 !== expectedOutput2) {
      console.log('Test failed: Output is not equal to expected output');
      return;
    }
    
    let input3 = [[-3, 4, 0, -2, 6, -1], 2];
    let expectedOutput3 = 5;
    let output3 = maximumSubarraySum(...input3);
    
    console.log('Input: ', input3);
    console.log('Expected Output: ', expectedOutput3);
    console.log('Output: ', output3);
    
    if (output3 !== expectedOutput3) {
      console.log('Test failed: Output is not equal to expected output');
      return;
    }
    
    console.log('Test passed');
  }
  
  testMaximumSubarraySum();
  