const myNumbers = [50, 44, 52, 81, 93, 100, 96, 98, 98];

for(i = 0; i < myNumbers.length; i ++){
    console.log(myNumbers[i]);
}

myNumbers.forEach(myForLoop);

function myForLoop(value){
    console.log(value);
}

myNumbers.map(myMap);

function myMap(value){
    console.log(value);
}

myNumbers.filter(myFilter);

function myFilter(value){
    return value > 90;
}

const myNewFilterValue = myNumbers.filter(myFilter);

console.log(myNewFilterValue);
