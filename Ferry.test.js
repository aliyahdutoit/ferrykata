const { Ferry } = require('./Ferry'); // Adjust the path as needed
const assert = require('assert');

describe('Ferry class', () => {
  it('should specify the number of cars allowed on the ferry', () => {
    const myFerry = new Ferry(10, 50);
    assert.strictEqual(myFerry.maxCars, 10);
  });

  it('should specify the number of people allowed on the ferry', () => {
    const myFerry = new Ferry(10, 50);
    assert.strictEqual(myFerry.maxPeople, 50);
  });

  it('should allow boarding cars and people within capacity', () => {
    const myFerry = new Ferry(10, 50);
    const result = myFerry.boardCarsAndPeople(5, 20);
    assert.strictEqual(result, true); // Boarding should be successful
    assert.strictEqual(myFerry.carsOnBoard, 5);
    assert.strictEqual(myFerry.peopleOnBoard, 20);
  });

  it('should prevent boarding when over capacity', () => {
    const myFerry = new Ferry(10, 50);
    const result = myFerry.boardCarsAndPeople(15, 60); // Attempt to board more than capacity
    assert.strictEqual(result, false); // Boarding should fail
    assert.strictEqual(myFerry.carsOnBoard, 0); // No cars should be on board
    assert.strictEqual(myFerry.peopleOnBoard, 0); // No people should be on board
  });



  // Method to count the number of cars of a specific color on the ferry
  it('should count cars of a specific color', () => {
    const myFerry = new Ferry(10, 50);
    myFerry.boardCar('red');
    myFerry.boardCar('blue');
    myFerry.boardCar('red');
    myFerry.boardCar('green');

    assert.strictEqual(myFerry.countCarsByColor('red'), 2);
    assert.strictEqual(myFerry.countCarsByColor('blue'), 1);
    assert.strictEqual(myFerry.countCarsByColor('yellow'), 0);
  });


// Method to remove a car of a specific color from the ferry
it('should update car count correctly when a car leaves the ferry', () => {
  const myFerry = new Ferry(10, 50);
  myFerry.boardCar('red');
  myFerry.boardCar('blue');
  myFerry.boardCar('green');

  assert.strictEqual(myFerry.carsOnBoard, 3);

  // Remove a car from the ferry
  myFerry.removeCar('blue');

  assert.strictEqual(myFerry.carsOnBoard, 2);
});



// Method to board a car onto the ferry with discounts
it('should give a 50% discount on the 3rd and 6th trips', () => {
  const myFerry = new Ferry(10, 50);
  const color = 'red';

  // Make 2 regular trips
  for (let i = 0; i < 2; i++) {
    const result = myFerry.board(color);
    assert.strictEqual(result, 'accepted');
  }

  // The 3rd trip should be half price
  const result3 = myFerry.board(color);
  assert.strictEqual(result3, 'half price');

  // Make 2 more regular trips
  for (let i = 0; i < 2; i++) {
    const result = myFerry.board(color);
    assert.strictEqual(result, 'accepted');
  }

  // The 6th trip should be half price
  const result6 = myFerry.board(color);
  assert.strictEqual(result6, 'half price');
});

});
