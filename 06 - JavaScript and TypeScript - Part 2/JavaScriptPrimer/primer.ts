let myData = {
  name: "Adam",
  weather: "sunny",
  printMessages: function() {
    console.log("Hello " + myData.name + ". ");
    console.log("Tday is " + myData.weather + ".");
  }
};

myData.printMessages();
