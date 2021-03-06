const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (c: number, d: number): number => {
  return c - d;
};

function divide(e: number, f: number): number {
  return e / f;
};

const multiply = function (g: number, h: number): number {
  return g * h;
};

const looker = (message: string): void => {
  console.log(message);
}

const throwError = (mess: string): void => {
  if (!mess) {
    throw new Error(mess)
  }
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);


