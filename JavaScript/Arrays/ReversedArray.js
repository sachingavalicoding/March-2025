const arr = [34,43,36,12,43,54];

const reversedArr = (arr) => {
    return Array.from(arr).reverse();
}

let ans = reversedArr(arr);
console.log(ans);