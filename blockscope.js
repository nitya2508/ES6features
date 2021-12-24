let a=100;
function outer(){
    let a = 20;
    console.log("hello")
    inner();

    function inner(){
        let b= 10;
        console.log(a+b, a,b);
    }

}
outer();
console.log(a);