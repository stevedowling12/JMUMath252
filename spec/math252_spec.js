//For addition
// tell the spec where to find our code	
var math = require('../math')


describe("A math program to do arithemtic", function() {
  it("can add two numbers", function() {
    expect(math.add(3,5)).toBe(8);
  });
});

//For subtraction
var math = require('../math')


describe("A math program to do arithemtic", function() {
  it("can subtract two numbers", function() {
    expect(math.sub(5,2)).toBe(3);
  });
});

//For Multiplying
var math = require('../math')


describe("A math program to do arithemtic", function() {
  it("can multiply two numbers", function() {
    expect(math.multiply(5,2)).toBe(10);
  });
});

//For Division
var math = require('../math')


describe("A math program to do arithemtic", function() {
  it("can divide two numbers", function() {
    expect(math.divide(10,2)).toBe(5);
  });
});

