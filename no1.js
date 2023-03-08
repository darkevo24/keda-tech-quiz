function manualSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function testManualSort() {
  let input = [1, 2, 4, 3, 5, 3, 2, 1];
  let expectedOutput = [5, 4, 3, 3, 2, 2, 1, 1];
  let output = manualSort(input);
  
  console.log('Input: ', input);
  console.log('Expected Output: ', expectedOutput);
  console.log('Output: ', output);
  
  if (output.length !== expectedOutput.length) {
    console.log('Test failed: Length of output array is not equal to expected output array');
    return;
  }
  
  for (let i = 0; i < output.length; i++) {
    if (output[i] !== expectedOutput[i]) {
      console.log(`Test failed: Output at index ${i} is not equal to expected output`);
      return;
    }
  }
  
  console.log('Test passed');
}

testManualSort();

