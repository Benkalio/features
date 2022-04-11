let apples: number = 10;
let speed: string = 'fast';
let hasName: boolean = false;

let nonMuch: null = null;
let not: undefined = undefined;

//object
let now: Date = new Date();

//Arrays
let color: string[] = ['red', 'green', 'blue'];
let jersyNum: number[] = [2, 3, 4, 6];
let truth: boolean[] = [true, false, true];

// classes
class Car {}
let car: Car = new Car();

//Object Literal
let point: { x: number; y: number } = {
  x: 23,
  y: 26,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//WHEN TO USE ANNOTATIONS
// 1. FUNCTIONS THAT RETURNS THE 'any' type
const json = '{"x":10, "y":2}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
