var splinterArray = [];

var splinter = function (numb1, numb2) {
  var z = numb1 * numb2;
  splinterArray.push(numb1, numb2, z);
  return splinterArray;
};

console.log(splinter(1, 2));
