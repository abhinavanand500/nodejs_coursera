var rect = require('./rectangle');

function solveRect(x,y){
    console.log("Solving rectangle for length : "+x+" and breadth : "+ y);

    // console.log("Area Of rectangle is : "+ rect.area(x,y));

    // console.log("Perimeter of rectangle is : "+rect.perimeter(x,y));

    rect(x,y, (err,rectangle) => {
        if(err){
            console.log("ERROR: "+ err.message);
        }
        else{
            console.log("Area Of rectangle is : "+ rectangle.area());
            console.log("Perimeter of rectangle is : "+rectangle.perimeter());

        }
    });
    console.log("This is called after rect()");
}
solveRect(2,3);
solveRect(7,9);