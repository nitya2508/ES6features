let multiply = (a,b)=>{
     console.log(a*b);

}

multiply(10,20);


let greet = () => console.log('Hello');
greet(); 


//both regular and arrow func ex


function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        console.log(this.age);
        let innerFunc = () => {
            console.log(this.name);
        }

        innerFunc();
    }
}

const x = new Person();
x.sayName();
// const y = x.sayName();
// console.log(y)
