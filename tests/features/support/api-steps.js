// features/support/api-steps.js
const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");


Given("I get the json", function() {
    this.apiGET("https://jsonplaceholder.typicode.com/posts")
});

When("b {int}", function(number) {
  this.incrementBy(number);
});

Then("c {int}", function(number) {
  expect(this.variable).to.eql(number);
});