// const fetching =  () => {
//     fetch("https://api.github.com/users")
//     .then((res) => res.json() )
//     .then((res) => console.log(res))
//     .catch((err) => console.log(" NOt getting data") );
// }

// fetching();

// const isPalindrome = (str) => {
//      for(let i = 0; i < str.length / 2; i++){
//         if(str[i] !== str[str.length - 1 - i]){
//             return false;
//         }
//      }
//      return true;
// }
// console.log(isPalindrome("aabaa"));



// const rev = (str) => {
//     let newStr = "";
//     for(let i = str.length-1; i >= 0; i--){
//         newStr += str[i];
//     }
//     return newStr;
// }
// console.log(rev("hello"));

let str = "hello";
// const rev = (str) => {
//     let newStr = "";
//     for(let i = 0; i < str.length; i++){
//         if(newStr.indexOf(str[i]) == -1){
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }
// console.log(rev("hello"));
// let newStr = new Set(str);
// newStr = [...newStr].join("");
// console.log(newStr);

const promise = new Promise((res , rej) => {
    setTimeout(() => {
      rej("Done");
    },1000)
});

promise.catch((err) => {
    console.log("rejected" + err);
})


