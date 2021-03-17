function closestToZero(givenArray) { 

    if ( givenArray.length === 0 || givenArray === undefined ) return 0;

    var closestNumber = givenArray[0];
    
    for (var i=1; i<givenArray.length; i++ ) {

        if (Math.abs(closestNumber) > Math.abs(givenArray[i]) || (Math.abs(closestNumber) >= Math.abs(givenArray[i]) && closestNumber < givenArray[i])){

            closestNumber = givenArray[i];
        }
    }

    return closestNumber;
}

var b  = [8, 5, 10];
var c = [5, 4, -9, 6, -10, -1, 8];
var d = [8, 2, 3, -2];
var e = [2, 0];

console.log(closestToZero(b));
console.log(closestToZero(c));
console.log(closestToZero(d));
console.log(closestToZero(e));




