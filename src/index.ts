(async () => {
  if (new Date().getTime() % 2 === 0) {
    const helloImport = await import('./hello');
    const HelloClass = helloImport.default;

    console.log(HelloClass.sayHello());
  } else {
    console.log('hello not imported!');
  }
})();
