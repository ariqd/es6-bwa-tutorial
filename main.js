// ES5: var
var myCars1 = ["BMW", "Tesla", "Toyota"];

for (var i = 0; i < myCars1.length; i++) {
  console.log("myCars1: " + myCars1[i]);
}

console.log(i); // 3

// ES 6: let
// Mencegah variabel diinisalisasi diluar scope
const myCars2 = ["BMW", "Tesla", "Toyota"];

for (let x = 0; x < myCars2.length; x++) {
  console.log("myCars2: " + myCars2[x]);
}

console.log(x); // Error
