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

console.log(fullModelAndColor);