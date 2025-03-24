let str = " hey how are you ";
let result = [];
for(let i = 0; i < str.length; i++){
    result.push(str.charCodeAt(i));
}

for(let j = 97 ; j < 122; j++){
    if(!(result.includes(j))){
       console.log(String.fromCharCode(j));
    }
}
