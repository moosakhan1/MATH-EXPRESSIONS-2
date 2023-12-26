function fun (){
let p =+prompt("enter your number");
console.log(p)//2
console.log(++p)//3
console.log(p)//3
console.log(p++)//3
console.log(p)//4
console.log(--p)//3
console.log(p)//3
console.log(p--)//3
console.log(p)//2

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
            1 -   0 +  1 +  1
            3
console.log(result)

let a =prompt("enter your name");
console.log( " Nice to meet you  " +  a )

let a =+prompt("enter your number");
console.log(a)
for (let i = 1; i < 11 ;i++){
    console.log( a  + " * " + i + " = " + i*a);
}
    for (let i = 1; i < 11 ;i++){
        if(a === undefined){
        console.log( " 5 "  + " * " + i + " = " + i*5);
    }
}

let a = "math";
let b = "computer";
let c = "urdu";
let d = 300;
let obtainedMath =+prompt("enter your number math ");
let obtainedComputer =+prompt("enter your number computer");
let obtainedUrdu =+prompt("enter your number urdu");
let total = obtainedMath + obtainedComputer + obtainedUrdu
console.log(total)
let percentage = (total / d) *100
console.log(percentage + "%")

}
fun();