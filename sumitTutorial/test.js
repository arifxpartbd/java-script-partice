

var myName = "my name is arif";

document.getElementById("demo").innerHTML = myName;

// var x = 7;

if(true){
    var x = 16;
    console.log(x);
}

console.log(x);

//data type
let dType = 10 + "volvo"

console.log(dType)

const carList = ['volvo', 'bmw']

console.log(carList[0]);

const personObject = {firstName: "arif", lastName: "khan", age: "25",}
personObject.firstName = "asif";
console.log(personObject["firstName"]);

function myFunction(name){
    console.log( name +"sleeping time is 10 PM");
}

myFunction("arif ");

// how to return value from function

let myReValue = myReturnValue(5,4);

function myReturnValue(a, b){
    console.log(a * b);
    return a * b;
}
myReturnValue();
console.log(myReValue);



