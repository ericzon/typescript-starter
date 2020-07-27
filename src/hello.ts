class HelloClass {
  static sayHello(): string {
    return `Hello on ${new Date()} !`;
  }

  static fact(n: number): number {
    let res = n;
    for (let i = n - 1; i > 0; i -= 1) {
      res *= i;
    }
    return res;
  }
}

export default HelloClass;
