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

// const promise = new Promise((res , rej) => {
//     setTimeout(() => {
//       rej("Done");
//     },1000)
// });

// promise.catch((err) => {
//     console.log("rejected" + err);
// })

str = "abc";
// let newStr = str.replace("a","d");
// console.log(newStr);

// const strArr = str.split("");// string to array
// strArr.join(""); // array to string

// console.log(str[0]);
// console.log(str[1]);

// console.log(str.charAt(1));// giving a postion or index it return an element present on that index
// console.log(str.slice(0,2)); //ab

// console.log(str.match("b"));

// let name = "sAchin gavali";
// for(let i = 0; i < name.length; i++){
//   if(name.charAt(i).toLowerCase() == "a"){
//     console.log(" Yes");
//   }
// }
let name = "Sachin gavali";
// name.split("").map((ele) => ele === "a" ? console.log(" Yes") : "");

const data = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 49.99,
    brand: "Sony",
    stock: 120,
    rating: 4.5,
    reviews: 350,
    discount: 10,
    shipping: "Free",
  },
  {
    id: 2,
    name: "Smartwatch with Fitness Tracker",
    category: "Wearables",
    price: 89.99,
    brand: "Samsung",
    stock: 80,
    rating: 4.3,
    reviews: 210,
    discount: 15,
    shipping: "Paid",
  },
  {
    id: 3,
    name: "4K Ultra HD Smart TV",
    category: "Electronics",
    price: 499.99,
    brand: "LG",
    stock: 50,
    rating: 4.7,
    reviews: 180,
    discount: 20,
    shipping: "Free",
  },
  {
    id: 4,
    name: "Gaming Laptop",
    category: "Computers",
    price: 1099.99,
    brand: "Asus",
    stock: 30,
    rating: 4.6,
    reviews: 90,
    discount: 5,
    shipping: "Free",
  },
  {
    id: 5,
    name: "Wireless Mouse",
    category: "Accessories",
    price: 19.99,
    brand: "Logitech",
    stock: 200,
    rating: 4.4,
    reviews: 500,
    discount: 8,
    shipping: "Paid",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 79.99,
    brand: "Razer",
    stock: 60,
    rating: 4.8,
    reviews: 240,
    discount: 12,
    shipping: "Free",
  },
  {
    id: 7,
    name: "Portable Power Bank 20000mAh",
    category: "Electronics",
    price: 34.99,
    brand: "Anker",
    stock: 150,
    rating: 4.5,
    reviews: 320,
    discount: 10,
    shipping: "Paid",
  },
  {
    id: 8,
    name: "Noise Cancelling Earbuds",
    category: "Electronics",
    price: 129.99,
    brand: "Bose",
    stock: 90,
    rating: 4.6,
    reviews: 175,
    discount: 18,
    shipping: "Free",
  },
  {
    id: 9,
    name: "Men's Running Shoes",
    category: "Footwear",
    price: 59.99,
    brand: "Nike",
    stock: 200,
    rating: 4.3,
    reviews: 220,
    discount: 15,
    shipping: "Paid",
  },
  {
    id: 10,
    name: "Women's Leather Handbag",
    category: "Fashion",
    price: 79.99,
    brand: "Gucci",
    stock: 40,
    rating: 4.7,
    reviews: 140,
    discount: 10,
    shipping: "Free",
  },
  {
    id: 11,
    name: "Smartphone with 128GB Storage",
    category: "Mobile Phones",
    price: 699.99,
    brand: "Apple",
    stock: 70,
    rating: 4.8,
    reviews: 300,
    discount: 5,
    shipping: "Free",
  },
  {
    id: 12,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 49.99,
    brand: "Nespresso",
    stock: 90,
    rating: 4.4,
    reviews: 160,
    discount: 12,
    shipping: "Paid",
  },
  {
    id: 13,
    name: "Digital DSLR Camera",
    category: "Cameras",
    price: 899.99,
    brand: "Canon",
    stock: 30,
    rating: 4.7,
    reviews: 180,
    discount: 8,
    shipping: "Free",
  },
  {
    id: 14,
    name: "Men's Analog Watch",
    category: "Accessories",
    price: 149.99,
    brand: "Rolex",
    stock: 25,
    rating: 4.9,
    reviews: 100,
    discount: 5,
    shipping: "Free",
  },
  {
    id: 15,
    name: "Electric Toothbrush",
    category: "Personal Care",
    price: 39.99,
    brand: "Oral-B",
    stock: 110,
    rating: 4.3,
    reviews: 230,
    discount: 10,
    shipping: "Paid",
  },
  {
    id: 16,
    name: "Yoga Mat",
    category: "Fitness",
    price: 24.99,
    brand: "Liforme",
    stock: 150,
    rating: 4.6,
    reviews: 190,
    discount: 12,
    shipping: "Paid",
  },
  {
    id: 17,
    name: "Wireless Gaming Controller",
    category: "Gaming",
    price: 59.99,
    brand: "Xbox",
    stock: 80,
    rating: 4.5,
    reviews: 220,
    discount: 10,
    shipping: "Free",
  },
  {
    id: 18,
    name: "USB-C Fast Charger",
    category: "Accessories",
    price: 14.99,
    brand: "Anker",
    stock: 300,
    rating: 4.4,
    reviews: 280,
    discount: 8,
    shipping: "Paid",
  },
  {
    id: 19,
    name: "Men's Leather Wallet",
    category: "Fashion",
    price: 29.99,
    brand: "Tommy Hilfiger",
    stock: 130,
    rating: 4.3,
    reviews: 180,
    discount: 15,
    shipping: "Paid",
  },
  {
    id: 20,
    name: "Smart Home Security Camera",
    category: "Home Security",
    price: 119.99,
    brand: "Ring",
    stock: 60,
    rating: 4.6,
    reviews: 250,
    discount: 10,
    shipping: "Free",
  },
];

// const updateData = data.map((product) => {
//   return { ...product, ["price"]: product.price + 4000 };
// });
// console.log(updateData);

// const filterData = data.filter((product) => product.price < 50 && product.stock > 150);
// console.log(filterData.length);

// const fetching = async () => {
//   const response = await fetch("https://api.github.com/users");
//   const data = await response.json();
//   console.log(data);
// };

// fetching();

// const fetching1 = () => {
//   try {
//     fetch("https://api.github.com/users")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch(err => console.log(" Not able to fetch now ",err));
//   } catch (error) {
//     console.log(" Error in fetching",error)
//   }
// };

// fetching1();

let str2 = "sdfsdfdsuuuu";
// const newStr = str2.split("").reverse().join("");

/* 
let rev = "";
for(let i = str2.length-1; i >= 0; i--){
  rev += str2[i];
}
console.log(rev); */

const getUser = () => {
  return new Promise((res , rej) => {
      setTimeout(() => {
          res({id:1 , name : "sachin"});
      },1000);
  })
}
const getPost = (id) => {
  return new Promise((res, rej) => {
      setTimeout(() => {
          res(["post1","post2"]);
      })
  })
}
const getComments = (post) => {
  return new Promise((res, rej) => {
      setTimeout(() => {
          res(["comment1","comment2"]);
      })
  })
}

// getUser()
// .then((response) => {
//     getPost(response.id)
//     .then((posts) => {
//         getComments(posts)
//         .then((comments) => {
//             console.log(comments);
//         }).catch((err) => console.log(err));
//     }).catch((err) => console.log(err))
// }).catch((err) => console.log(err));

const getData = async () => {
  const user = await getUser();
  const posts = await getPost(user.id);
  const comments = await getComments(posts[1]);
  console.log(comments);
}

getData();