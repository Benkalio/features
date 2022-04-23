// CLASSES IS A BLUEPRINT FOR CREATING AN OBJECT WITH VALUES AND METHODS TO REPRESENT A THING

class MyVehicles {
  drive(): void {
    console.log('moving');
  }
  hunk(): void{
    console.log('pum pum');
    
  }
}

class Car extends MyVehicles {
  drive(): void {
    console.log('vroommmm');
    
  }
}

const car = new Car();

car.drive();
car.hunk();
