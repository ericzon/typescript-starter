// features/support/world.js
const { setWorldConstructor } = require("cucumber");
const axios = require('axios');

class CustomWorld {


  constructor() {
    this.variable = 0;
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }

  apiGET(url) {
    axios.get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
    console.log(error);
  });
    
  }

  apiPOST() {

  }
}

setWorldConstructor(CustomWorld);