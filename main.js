// ES5: var
var myCars = ["BMW", "Tesla", "Toyota"];

for (var i = 0; i < myCars.length; i++) {
   console.log(myCars[i]);
 }

 console.log(i); // 3

// ES 6: let
// Mencegah variabel diinisalisasi diluar scope
const myCars = ["BMW", "Tesla", "Toyota"];

for (let i = 0; i < myCars.length; i++) {
  console.log(myCars[i]);
}

console.log(i); // Error