const arr = [23,43,34,34,43,34,10];

/* const removeDuplicates = (arr) => {
    return new Set([...arr]);
} */
//let ans = Array.from(removeDuplicates(arr));
// 2nd method
/* const removeDuplicates = (arr) => {
    let result = [];
    arr.map((ele) => {
        if(result.includes(ele) === false){
            result.push(ele);
        }
    });
    return result;
} */

// 3rd method 
// const removeDuplicates = (arr) => {
//         let result = [];
//         arr.map((ele) => {
//             if(result.indexOf(ele) === -1){
//                 result.push(ele);
//             }
//         });
//         return result;
// }



let ans = removeDuplicates(arr);
console.log(ans);