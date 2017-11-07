export class Name {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }

  get nameMessage() {
    return `Hello ${this.first} ${this.second}`;
  }
}

export class WeatherLocation {
  constructor(weather, city) {
    this.weather = weather;
    this.city = city;
  }

  getweatherMessage() {
    return `It is ${this.wheater} in ${this.city}`;
  }
}
