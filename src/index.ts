const getRandomEvenOdd = () => new Date().getTime() % 2 === 0;

(async () => {
  console.log(`env secret: ${process.env.SECRET}`);
  const helloImport = await import('./hello');
  const HelloClass = helloImport.default;

  console.log(HelloClass.sayHello());
  const weather = HelloClass.getWeather();
  const finalWeather = weather ?? 'no idea about the weather';

  console.log(`Optional chaining example. current weather: ${finalWeather}`);

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
  console.log(
    `Nullish coalescing operator example. dummyObj: ${dummyObj?.level1?.level2}`
  );
})();
