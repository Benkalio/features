// CLASS IS A BLUEPRINT FOR CREATING AN OBJECT WITH VALUES AND METHODS TO REPRESENT A THING
//MODIFIERS: PUBLIC, PRIVATE, PROTECTED

class MyVehicles {
  color: string;
  // started: boolean;

  constructor(color: string) {
    this.color = color;
  }

  // OR AS A SHORTCUT OF ABOVE CONSTRUCTOR FOR INSTANCE OF A VARIABLE
  // constructor(public started: boolean) {}

  protected hunk(): void{
    console.log('pum pum');
    
  }
}

class Car extends MyVehicles {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroommmm');
  }
  startDriving(): void {
    this.drive();
    console.log('speeding');
    this.hunk();
  }

}
const myVehicles = new MyVehicles('green');
console.log(myVehicles.color)

const car = new Car(4, 'blue');

car.startDriving();
