//ARRAY-LIKE STRUCTURE WHERE EACH ELEMENT 
// REPRESENTS SOME PROPERTY OF A RECORD

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
}

//TYPE ALIAS
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];

const carSpecs: [number, number] = [400, 2335];

const carStats = {
  horsepower: 400,
  weight: 2335
};
