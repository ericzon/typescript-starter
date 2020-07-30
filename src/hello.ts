class HelloClass {
  #greeting: string = 'Hello';

  sayHello(): string {
    return `${this.#greeting} on ${new Date()} !`;
  }

  static fact(n: number): number {
    let res = n;
    for (let i = n - 1; i > 0; i -= 1) {
      res *= i;
    }
    return res;
  }

  static getWeather() {
    const weatherOptions = ['sunny', 'rainy', 'cloudy'];
    const randomIndex = Math.floor(Math.random() * 10) % weatherOptions.length;
    return weatherOptions[randomIndex - 1];
  }
}

export default HelloClass;
