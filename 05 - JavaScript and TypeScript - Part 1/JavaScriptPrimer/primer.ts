let messageFunction = function(name, weather) {
  let message = "Hello, Peter";
  if (weather == "sunny") {
    let message = "It is a nice day";
    console.log(message);
  } else {
    let message = "It is " + weather + " today";
    console.log(message);
  }
  console.log(message);
};

let messageFunctionVar = function(name, weather) {
  var message = "Hello, Adam";
  if (weather == "sunny") {
    var message = "It is a nice day";
    console.log(message);
  } else {
    var message = "It is " + weather + " today";
    console.log(message);
  }
  console.log(message);
};

messageFunctionVar("Adam", "raining");

messageFunction("Peter", "raining");
