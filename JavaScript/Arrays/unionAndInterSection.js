const arr1 = [34, 43, 23, 34, 89];
const arr2 = [34, 54, 23, 443, 343];

// const union = (arr1 , arr2) => {
//     let result = [];
//     Array.from(arr1).map((ele) => {
//         if(Array.from(arr2).includes(ele) && ( result.includes(ele) === false )){
//             result.push(ele);
//         }
//     });
//     return result;
// }

// const unionOfArr = (arr1, arr2) => {
//   arr1 = new Set(arr1);
//   arr2 = new Set(arr2);
//   return Array.from(arr1.union(arr2))
// };
// console.log(unionOfArr(arr1, arr2));


const interSectionOfArr = (arr1, arr2) => {
    arr1 = new Set(arr1);
    arr2 = new Set(arr2);
    return Array.from(arr1.intersection(arr2))
  };
  console.log(interSectionOfArr(arr1, arr2));
  