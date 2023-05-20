let multiply = (a,b)=>{
     console.log(a*b);

}

multiply(10,20);


let greet = () => console.log('Hello');
greet(); 


//both regular and arrow func ex


var Person= ()=>{
  let name = 'Jack';
   let age = 25;
     var sayName =  ()=> {

        console.log(age);
        let innerFunc = () => {
            console.log(name);
            return "name"
        }

        innerFunc();
    }
    sayName();
}

const x =  Person();
console.log("......",x);
x.sayName();
const y = x.sayName();

console.log(y)
