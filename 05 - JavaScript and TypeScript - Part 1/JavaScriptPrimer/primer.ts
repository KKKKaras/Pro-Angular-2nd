let myFunc = function(name, weather = "raining", ...extraArgs) {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today");
  for (let i = 0; i < extraArgs.length; i++) {
    console.log("Extra Arg: " + extraArgs[i]);
  }
};

myFunc("Adam", "sunny");
myFunc("Adam");
myFunc("Adam", "sunny", "one", "two", "three");
