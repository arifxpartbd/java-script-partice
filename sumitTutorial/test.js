const carList = ["Saab", "Volvo", "BMW", "Toyota"];

let carListLenght = carList.length;

let text = "<ul>"

// for(let i = 0; i < carListLenght; i ++){
//     text += "<li>" + carList[i] + "</li>";
//     console.log(carList[i]);
// }
carList.forEach(myFunction);

function myFunction(value){
    text += "<li>" + value + "</li>";
}
text += "</ul>"


document.getElementById("demo").innerHTML = text;
// carList.forEach(myFunction);

