let rect = require('./rectangle');

    function solveRect(l,b) {
        console.log("Solving for rectangle with l = " + l + " and b = " + b )
        rect(l,b, (err, rectange) => {
            if (err) {
                console.log("ERROR: ", err.message)
            }
            else {
                console.log("The area of the rectangle with dimensions " + l + " and " + b + "is " + rectange.area());
                console.log("The perimeter of the rectangle with dimensions " + l + " and " + b + "is " + rectange.perimeter());
            }
        });
        console.log("This statement us after the call to rect()")
    }

    solveRect(2,4)
    solveRect(3,5)
    solveRect(0,5)
    solveRect(-3,5)