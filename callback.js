function login(name, num, callback, x){
    setTimeout(()=>{
    console.log("visited");
     callback(x);
    },3000);
}

function ticket(message, callback, y){
   setTimeout(()=>{
    console.log("ticket",message);
    callback(y);
   })
}

function interval(msg){
   setTimeout(()=>{
    console.log("refresh", msg);
   })
}


login("nitya", "1234321123", ()=>{ticket("hello", ()=>{interval("done"); })})