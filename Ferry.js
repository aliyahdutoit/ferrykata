class Ferry {
  constructor(maxCars, maxPeople) {
    this._maxCars = maxCars;
    this._maxPeople = maxPeople;
    this._carsOnBoard = 0;
    this._peopleOnBoard = 0;
    this._cars = [];
    this._carTrips = new Map();
    this._totalTrips = 0; 
  }

  // to return maxCars
  get maxCars() {
    return this._maxCars;
  }

  // to return maxPeople
  get maxPeople() {
    return this._maxPeople;
  }

  // to return carsOnBoard
  get carsOnBoard() {
    return this._carsOnBoard;
  }

  // to return peopleOnBoard
  get peopleOnBoard() {
    return this._peopleOnBoard;
  }

  // Method to board cars and people
  boardCarsAndPeople(cars, people) {
    if (this._carsOnBoard + cars <= this._maxCars && this._peopleOnBoard + people <= this._maxPeople) {
      this._carsOnBoard += cars;
      this._peopleOnBoard += people;
      return true; // Successfully boarded
    } else {
      return false; // Boarding failed due to capacity limitations
    }
  }

  // Method to board a car onto the ferry
  boardCar(color) {
    if (this._carsOnBoard < this._maxCars) {
      this._cars.push(color);
      this._carsOnBoard++;
      return true; // Successfully boarded
    } else {
      return false; // Boarding failed due to car capacity
    }
  }

  // Method to count the number of cars of a specific color on the ferry
  countCarsByColor(colorToCount) {
    return this._cars.filter((color) => color === colorToCount).length;
  }



// Method to remove a car of a specific color from the ferry
removeCar(colorToRemove) {
  const carIndex = this._cars.indexOf(colorToRemove);
  if (carIndex !== -1) {
    this._cars.splice(carIndex, 1);
    this._carsOnBoard--;
  }
}


    // Method to board a car onto the ferry with discounts
    board(color) {
      if (this._carTrips.has(color)) {
        const trips = this._carTrips.get(color);
        if (trips < 2) {
          this._carTrips.set(color, trips + 1);
          return 'accepted'; // Regular boarding for the first two trips
        } else if (trips === 2) {
          this._carTrips.set(color, trips + 1);
          return 'half price'; // 50% discount on the third trip
        } else {
          return 'half price'; // 50% discount after the third trip
        }
      } else {
        this._carTrips.set(color, 1);
        return 'accepted'; // First trip is accepted
      }
    }


  // Method to board a car onto the ferry with discounts
  board(color) {
    if (this._carTrips.has(color)) {
      const trips = this._carTrips.get(color);
      if (trips < 2) {
        this._carTrips.set(color, trips + 1);
        return 'accepted'; // Regular boarding for the first two trips
      } else if (trips === 2) {
        this._carTrips.set(color, trips + 1);
        return 'half price'; // 50% discount on the third trip
      } else {
        this._carTrips.set(color, trips + 1);
        this._totalTrips++; // Increment the total trips
        if (this._totalTrips % 7 === 0) {
          return 'you go free!'; // Every 7th trip is free
        } else {
          return 'accepted'; // All other trips
        }
      }
    } else {
      this._carTrips.set(color, 1);
      return 'accepted'; // First trip is accepted
    }
  }

};

// Export the class
module.exports = { Ferry };