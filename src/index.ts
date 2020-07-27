(async () => {
  console.log(`env secret: ${process.env.SECRET}`);
  if (new Date().getTime() % 2 === 0) {
    const helloImport = await import('./hello');
    const HelloClass = helloImport.default;

    console.log(HelloClass.sayHello());
    console.log(HelloClass.fact(5));
  } else {
    console.log('hello not imported!');
  }
})();
