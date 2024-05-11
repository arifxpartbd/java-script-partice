
const myList = ["arif", "khan", "mina", "bangladesh","culue","rupu", "zoly","ykon"];
myList.sort();
myList.reverse();

console.log(myList);

const points = [40, 100, 1, 5, 25, 10];

points.sort(function(a, b){
    return a - b;
});

function myTopValue(points){
    return Math.max.apply(null, points);
}
console.log(points);
console.log(points[points.length - 1]);

console.log(myTopValue(points));