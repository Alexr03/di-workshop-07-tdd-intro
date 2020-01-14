var chai = require('chai')
var expect = chai.expect

var Coolculator = require('../lib/coolculator')

describe('Coolculator', function() {
  let coolculator = new Coolculator()

  it('should add', function() {
    result = coolculator.add(2, 3)
    expect(result).to.equal(5)
  })

  // Uncomment this 👇
  it('should multiply', function() {
    result = coolculator.multiply(2, 3)
    expect(result).to.equal(6)
  })

  // Uncomment this 👇
  it('should subtract', function() {
    result = coolculator.subtract(3, 2)
    expect(result).to.equal(1)
  })

  it('should divide', function() {
    result = coolculator.divide(10, 2)
    expect(result).to.equal(5)
  })

  it('should highest', function() {
    result = coolculator.highest(20, 25)
    expect(result).to.equal(25)
  })

  it('should lowest', function() {
    result = coolculator.lowest(10, 5)
    expect(result).to.equal(5)
  })

  it('should double', function() {
    result = coolculator.double(6)
    expect(result).to.equal(12)
  })

  it('should square', function() {
    result = coolculator.square(3)
    expect(result).to.equal(27)
  })

  it('should raise', function() {
    result = coolculator.raise(5, 7)
    expect(result).to.equal(78125)
  })

  it('isNegative', function() {
    result = coolculator.isNegative(-43)
    expect(result).to.equal(true)
  })

  it('isPositive', function() {
    result = coolculator.isPositive(102)
    expect(result).to.equal(true)
  })

  it('isCool', function() {
    result = coolculator.isCool(33)
    expect(result).to.equal(true)
  })
})
