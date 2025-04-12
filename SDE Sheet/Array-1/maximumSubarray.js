let arr = [-2,1,-3,4,-1,2,1,-5,4];

// output is 6 
const getMaxSubarraySum = (arr) => {
    let currSum = 0;
    let maxSum = 0;

    arr.forEach((ele) => {
        currSum += ele; //-2 // 1 // 1 + -3 
        if(currSum > maxSum){ // -2 > 0 // 1 > 0  // -2 > 1
            maxSum = currSum; // 1
        }
        if(currSum < 0){// -2 < -0 == 0 // -2 < 0
            currSum = 0;
        }
    });

    console.log(`CurrSum ${currSum}`);
    console.log(`MaxSum ${maxSum}` );
}

getMaxSubarraySum(arr);