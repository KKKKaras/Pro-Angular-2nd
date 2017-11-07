import { Name, WeatherLocation } from "./modules/NameAndWeather";
import { Name as OtherName } from "./modules/DuplicateName";
import { TempConverter } from "./tempConverter";

let name = new Name("Peter", "Csontos");
let loc = new WeatherLocation("sunny", "Budapest");
let other = new OtherName();

let cTemp = TempConverter.convertFtoC("38");

let tuple: [string, string, string];
tuple = ["Budapest", "sunny", TempConverter.convertFtoC(38)];

console.log(`It is ${tuple[2]} degree C and ${tuple[1]} in ${tuple[0]} `);
