// // setTimeout(function () {
//     //     console.log("hellow");
//     // }, 2000);
    
    


// // function signUp(email, pass,callBack,secondCallBack) {
// //     setTimeout(function(){
// //         if(email === "amanfarhan2008@gmail.com" && pass === "12345678"){
// //             callBack(secondCallBack)
// //         }
// //     }, 1000)
// // }


// // signUp("amanfarhan2008@gmail.com" , "12345678" ,
// //     function redirectToTimeLine(cb){
// //         console.log(cb()); 
// // } , function secondFunction(){
// //     return "Welcome Aman!"
// // });




// // random number
// // if even number (2);
// // odd it is an odd number

// // promise
// // let firstAsync = new Promise(function (resolve, reject) {
// //     function number () {
// //         let random = Math.ceil(Math.random() * 100);

// //         if (random % 2 === 0) {
// //             resolve(random);
// //         } else {
// //             reject("it is an odd number");
// //         }

// //     }
// //     number();
// // })


// // firstAsync
// //     .then(function (success) {
// //         console.log(success);
// //     })
// //     .catch(function (error) {
// //         console.error(error);
// //     });




// // Promise

// // let firstAsync = new Promise(function (resolve , reject){
// //     random = Math.ceil(Math.random()*100);
// //     if (random % 2 === 0 ){
// //         reject(random);
// //     }else{
// //         reject("it is an old number");
// //     }
// //     number();
// // })

// //     .then(function(seccess){
// //         console.log(seccess);
// //     })
// //     .catch(function(error){
// //         console.log(error);
// //     });



// let firstAsync = new Promise(function (resolve,reject) {
//     random = Math.ceil(Math.random()*100);
//     if(random % 2 === 0){
//         resolve(random);
//     }else {
//         reject("it is old number");
//     }
//     number();
// })

//     .then(function (secces) {
//         console.log(secces);
//     })
//     .catch(function (error){
//         console.log(error);
//     });



// let email = document.getElementById("email");
// let password = document.getElementById("password");


// function register (){
//     firebase.auth().createUserWithEmailAndPassword(email.value , password.value)
// }