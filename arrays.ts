const carMakers: string[] = ['ford', 'ferrari', 'toyota'];

const dates = [new Date(), new Date()];

const carByMake: string[] = []

// HELP WITH INFERENCE WHEN EXTRACTING VALUES
const car = carMakers[0];
const carMyCar = carMakers.pop();

//PREVENT INCOMPATIBLE VALUES
carMakers.push('honda');

//HELP WITH 'map'
carMakers.map(
  (car: string): string => {
    return car.toLowerCase();
  }
);

// FLEXIBLE ARRAYS TYPES
const importantDates: (Date | string)[] = [new Date(), '2012-2-10'];
