let myFunc = function(nameFunction) {
  return "Hello " + nameFunction() + ".";
};

let printName = function(nameFunction, printFunction) {
  printFunction(myFunc(nameFunction));
};

printName(function() {
  return "Adam";
}, console.log);
