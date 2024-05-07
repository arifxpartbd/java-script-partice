const car = {
    name: "Fial",
    model: 500,
    weight: "850 kg",
    color: "white",
    start: function (){
        console.log("car has started");
    },
    drive: function (){
        console.log("car is driving");
    },
    modelAndColor: function(){
        return this.model + " " + this.color;
    } 
}
car.color = "red updated";

console.log(car.color);

car.drive();

let fullModelAndColor = car.modelAndColor();
let myText = "hello arif how are you? \\arif\\";

console.log(myText);

console.log(fullModelAndColor);

function showTime(){
    document.getElementById("time").innerText = "Now time is: "+ Date();
}

let str = "hello arif";
let newStr = str.replace("arif", "asif");

console.log(newStr);

function showUperTest(){
    let myUperText = document.getElementById("time").innerHTML;
    document.getElementById("time").innerHTML = myUperText.toUpperCase();
}