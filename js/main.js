// callbacks
 
// function firstFunction(parameters, callback){
 
//     callback();
// }
// promises ES6 2015
// 3 states: Pending, Fulfilled, Rejected
 
// const myPromise = new Promise((resolve, reject) => {
 
//     const error = false;
//     if (!error) {
//         resolve("Yes resolved the promise ");
//     } else {
//         reject("No rejected promise");
//     }
// })
 
// console.log(myPromise);
 
// thenable
 
// myPromise
// .then((value) => {
// //console.log(value);
// return value + 1;
// })
// .then((newValue) => {
//     console.log(newValue);
// })
// .catch((err) => {
//     console.log(err);
// });
 
 
// Fetch API
 
// const anotherPromise = new Promise((resolve, reject) => {
 
//     setTimeout(function() {
//         resolve("My another Promise resolved")
//     }, 3000)
// });
 
// anotherPromise.then((value) => {
//     console.log(value);
// });
 
// myPromise.then((value) => {
//     console.log(value);
// });
 
// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users);
 
 
// fetch("https://jsonplaceholder.typicode.com/users")
 
// .then((response) => {
 
// return response.json();
// })
 
// .then((data) => {
//    // console.log(data);
//    data.forEach((user) => {
 
//     console.log(user);
       
//    })
// });
 
// Async/await ES8 2017
 
const myUsers = {
 
    userList: []
};
 
const myCoolFunction = async () => {
 
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const jasonUserData = await response.json();
 
return jasonUserData;
};
 
const anotherFun = async () => {
 
    const data = await myCoolFunction();
  return  myUsers.userList.push(data);
};
 
anotherFun();
console.log(myUsers.userList);
 
 
 
 
 

