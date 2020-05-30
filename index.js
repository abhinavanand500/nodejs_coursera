// var rect = {
//     perimeter : (x,y) =>(2*(x+y)),
//     area : (x,y) => (x*y)
// }


var rect = require('./rectangle');

function solveRect(x,y){
    console.log("Solving rectangle for length : "+x+" and breadth : "+ y);

    console.log("Area Of rectangle is : "+ rect.area(x,y));

    console.log("Perimeter of rectangle is : "+rect.perimeter(x,y));
}


solveRect(2,3);
solveRect(7,9);