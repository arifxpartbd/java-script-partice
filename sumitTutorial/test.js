const myNumbers = [45, 50, 60];



function myFunction(value){
    return value *2 ;
}


const myNewNumber = myNumbers.map(myFunction);

console.log(myNumbers);
console.log(myNewNumber);