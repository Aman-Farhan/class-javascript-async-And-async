// setTimeout(function () {
    //     console.log("hellow");
    // }, 2000);
    
    


function signUp(email, pass,callBack,secondCallBack) {
    setTimeout(function(){
        if(email === "amanfarhan2008@gmail.com" && pass === "12345678"){
            callBack(secondCallBack)
        }
    }, 1000)
}


signUp("amanfarhan2008@gmail.com" , "12345678" ,
    function redirectToTimeLine(cb){
        console.log(cb()); 
} , function secondFunction(){
    return "Welcome Aman!"
});
