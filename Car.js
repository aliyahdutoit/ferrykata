class Car {
    constructor(color, passengerCount) {
      this._color = color;
      this._passengerCount = passengerCount;
    }
  
    //to return color
    get color() {
      return this._color;
    }
  
    // to return passangercount
    get passengerCount() {
      return this._passengerCount;
    }
  }
  
  // Testing...
  const myCar = new Car('blue', 2);

  console.log(myCar.color); 
console.log(myCar.passengerCount); 

// to export class
module.exports = { Car };
