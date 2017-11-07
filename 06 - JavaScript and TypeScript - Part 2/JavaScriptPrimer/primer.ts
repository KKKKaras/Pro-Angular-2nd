import * as NameAndWeatherLocation from "./modules/NameAndWeather";
import { Name as OtherName } from "./modules/DuplicateName";
import { TempConverter } from "./tempConverter";

let name = new NameAndWeatherLocation.Name("Peter", "Csontos");
let loc = new NameAndWeatherLocation.WeatherLocation("sunny", "Budapest");
let other = new OtherName();

let cTemp = TempConverter.convertFtoC(38);

console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log(other.message);
console.log(`The temp is ${cTemp}C`);
