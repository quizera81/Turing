console.log("Hello Chairman");

// variable

let a=1; //integer
let b='ananas'  // string
let c=false/true // boolean
let d=5.5 // double 


// loop 

for (let a=0; a<10; a++){
    console.log(a)
    
}

for (let a=1; a<10 ;a++){
    if (a==5)continue //jump this
    if (a==7)break //stop at 
    console.log(a)

}


class Car{
    move() {
        console.log('moving')
        
    }
    stop(){
        console.log('stopping')
    }

}

let myCar=new Car();
myCar.move()
myCar.stop()

var number=5; // comment

var D=5;
var E=3;
D=D+3;
E=E+ " Is my years of driving experience"
console.log(E)

let sum= 10+10;
console.log("The sum is " +sum);


var myVar=1;
myVar++;
console.log(myVar)

var h=3;

h +=4;
console.log(h);
// h -=1;

//concatinating or adding two strings together

var concat="This is the start.\n " + "This is the end. "
console.log(concat);

//only change code below this line

var ourstring="This is the first sentence \n";
 ourstring +="This is the second sentence";
 console.log(ourstring);




