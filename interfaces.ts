//CREATES NEW TYPE, DESCRIBING THE PROPERTY NAMES AND VALUE TYPES OF AN OBJECT

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 30,
  summary(): string {
    return `My Drink is ${this.sugar} grams of sugar`;
  }
};

const printReport = (item: Reportable): void => {
  console.log(`Name: ${item.summary()}`);
};

printReport(oldCivic);
printReport(drink);