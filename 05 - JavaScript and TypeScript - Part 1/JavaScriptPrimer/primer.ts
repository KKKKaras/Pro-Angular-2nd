let myFunc = nameFunction => "Hello " + nameFunction() + ".";

let printName = (nameFunction, printFunction) =>
  printFunction(myFunc(nameFunction));

printName(function() {
  return "Peter";
}, console.log);
