class MyVehicles {
  drive(): void {
    console.log('moving');
  }
  hunk(): void{
    console.log('pum pum');
    
  }
}

const myVehicles = new MyVehicles();
myVehicles.drive();
myVehicles.hunk();