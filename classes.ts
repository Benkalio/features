// CLASS IS A BLUEPRINT FOR CREATING AN OBJECT WITH VALUES AND METHODS TO REPRESENT A THING
//MODIFIERS: PUBLIC, PRIVATE, PROTECTED

class MyVehicles {
  // public drive(): void {
  //   console.log('start engine');
  // }
  protected hunk(): void{
    console.log('pum pum');
    
  }
}

class Car extends MyVehicles {
  private drive(): void {
    console.log('vroommmm');
  }
  startDriving(): void {
    this.drive();
    console.log('speeding');
    this.hunk();
  }
}

const car = new Car();

car.startDriving();
