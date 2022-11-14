const getRandomEvenOdd = () => new Date().getTime() % 2 === 0;
(async () => {
  console.log(`env secret: ${process.env.SECRET}`);
  const helloImport = await import('./hello');
  const HelloClass = helloImport.default;
  const helloInstance = new HelloClass();

  console.log(helloInstance.sayHello());
  const weather = HelloClass.getWeather();
  const finalWeather = weather ?? 'no idea about the weather';

  console.log(`Nullish coalescing example. current weather: ${finalWeather}`);

  console.log(HelloClass.fact(5));

  const dummyObj = {
    level1: {
      ...(getRandomEvenOdd()
        ? {
            level2: 'l2',
          }
        : {}),
    },
  };
  console.log(`Optional chaining operator example. dummyObj: ${dummyObj?.level1?.level2}`);
})();
