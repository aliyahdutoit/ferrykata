const { Car } = require('./Car'); 
const assert = require('assert');


describe('Car class', () => {
  it('should return the correct color', () => {
    const myCar = new Car('red', 4);
    assert.strictEqual(myCar.color, 'red');
  });

  it('should return the correct passenger count', () => {
    const myCar = new Car('blue', 2);
    assert.strictEqual(myCar.passengerCount, 2);
  });
});
