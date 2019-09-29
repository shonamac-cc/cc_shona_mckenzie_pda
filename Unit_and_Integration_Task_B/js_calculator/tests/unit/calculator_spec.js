var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('it has to add two numbers together', function(){
    calculator.previousTotal = 4
    calculator.add(1)
    assert.strictEqual(calculator.runningTotal, 5)
  });

  it('it has to subtract two numbers', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.strictEqual(calculator.runningTotal, 3)
  });

  it('it has to multiply two numbers', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.strictEqual(calculator.runningTotal, 15)
  });

  it('it has to divide two numbers', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.strictEqual(calculator.runningTotal, 3)
  });

  it('it has to concatenate multiple number button clicks', function(){
    calculator.runningTotal = 0
    calculator.numberClick(4)
    calculator.numberClick(7)
    calculator.numberClick(3)
    assert.strictEqual(calculator.runningTotal, 473)
  });

  it('it has to chain multiple operations together', function(){
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(4)
    calculator.operatorClick('/')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 8)
  });

  it('it has to clear the running total without affecting calculation', function(){
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.numberClick(7)
    calculator.clearClick()
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, '11')
  });

});
