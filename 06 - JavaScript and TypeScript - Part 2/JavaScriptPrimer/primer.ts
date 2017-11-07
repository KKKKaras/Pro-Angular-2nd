import { Name, WeatherLocation } from "./modules/NameAndWeather";

let name = new Name("Peter", "Csontos");
let loc = new WeatherLocation("sunny", "Budapest");

console.log(name.nameMessage);
console.log(loc.weatherMessage);
