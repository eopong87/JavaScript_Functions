console.log("Hello World!\n==========\n");

/* Exercise 1 Section
function printOdds(count){
    if(count < 0){
    for (let i = 1; i <=count ; i++){
        if (i % 2 != 0){
            console.log(i);
        }
    } else {
     for(let i =1: i <= count; i++){
        if( %2 ! = 0){
            console.log(i);
        }
     }
    }
 
}
}*/

/*printOdds(10); // 1,3,5,7,9
printOdds(100);// 1, 3, 5-99 */

console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let oldEnoughMsg = `Congrats ${name}! you can drive!`;
let tooYoungMsg = `sorry${name}, you need to wait ${
    16 - age
} year(s) until you can drive.`;
if( age < 16 ) {
    console.log(tooYoungMsg);
} else {
    console.log(oldEnoughMsg);
}
 checkAge("Steve", 12);
 checkAge("James", 16);
 checkAge("Sam", 21)


 // excercise 3
 function checkQuadrant (x,y)
     if (x > 0 && y > 0) {
     return "Quadrant 1"; 
    } else if ( x< 0 && y > 0){
      return "Quadrant 2"
    } else if (x < 0 && y<0){
      return "quadrant 3";
    } else if(x > 0 && y != 0) {
      return "quadrant 4";
    } else if (x == 0 &&y != 0){
      return" X Axis"    
    } else if (x != 0 && y==0) 
      return "Y Axis"
      else{
    return "origin";
}
console.log(checkQuadrant(1,1));
console.log(checkQuadrant(-11,1));
console.log(checkQuadrant(-1,-11));
console.log(checkQuadrant(1,-11));
console.log(checkQuadrant(0,-11));
console.log(checkQuadrant(1,0));
console.log(checkQuadrant(0,0));

 /* exercise 4 section */
 console.log("exercise 4:\n=========\n");
 function typeoftriangle(side1, side2, side3){
  let isValid = false;
  if ( side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2){
    isValid = true;
  }
  if (isvalid){
    if (side1 == side2 && side2 == side3){
      console. log(
        `Sides ${side1}, ${side2}, ${side3}form an equilateral triangle`
      );
    } else if (side1 == side2 || side2 == side3){
      console.log(`Sides ${side1}, ${side2}, ${side3}form an isosceles triangle`
      );
    } else {
      console.log (`Sides ${side1}, ${side2}, ${side3} form a scalene triangle`);
    }
  }
  if (isValid == false){
    console.log("Sorry, invalid triangle");
  }

 }

 /* typeofTriangle(2,2,2); //equilateral
    typeofTriangle(1,2,2); //isosceles
    typeofTriangle(1,1,2); //invalid
    typeofTriangle(2,3,4); //scalene
 


