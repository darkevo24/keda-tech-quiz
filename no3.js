function sumEvenNumbers(obj) {
    let sum = 0;
    
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        if (obj[key] % 2 === 0) {
          sum += obj[key];
        }
      } else if (typeof obj[key] === 'object') {
        sum += sumEvenNumbers(obj[key]);
      }
    }
    
    return sum;
  }

function testSumEvenNumbers() {
let input1 = {
    outer: 2,
    obj: {
    inner: 2,
    otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
    }
    }
};
let expectedOutput1 = 6;
let output1 = sumEvenNumbers(input1);

console.log('Input: ', input1);
console.log('Expected Output: ', expectedOutput1);
console.log('Output: ', output1);

if (output1 !== expectedOutput1) {
    console.log('Test failed: Output is not equal to expected output');
    return;
}

let input2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 4}, ee: 'car'}
};
let expectedOutput2 = 12;
let output2 = sumEvenNumbers(input2);

console.log('Input: ', input2);
console.log('Expected Output: ', expectedOutput2);
console.log('Output: ', output2);

if (output2 !== expectedOutput2) {
    console.log('Test failed: Output is not equal to expected output');
    return;
}

console.log('Test passed');
}

testSumEvenNumbers();
  