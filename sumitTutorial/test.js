const myNumbers = [45, 50, 60];

myNumbers.forEach(myFunction)

function myFunction(value, index, array){
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("-------------");
}