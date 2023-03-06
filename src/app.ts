// let age: number = 20;
// if (age > 50) {
//   age += 10;
// }

// console.log(age);

// let sales: string = "123_456_789";
// console.log(sales);

// let arr: number[] = [1, 2, 6];
// let arr: number[] = [];
// arr[0] = 1;
// arr[1] = 2;

// // let user: [number, string] = [21, "Hajar", 5] --> error;
// let user: [number, string] = [21, "Hajar"];
// user.push(1);
// console.log(user);

//! Enums
//* PascalCase
// enum Size {
//   Small = 1,
//   Medium = 2,
//   Large = 3,
// }

// const enum Size {
//   Small = "s",
//   Medium = "m",
//   Large = "l",
// }

// let mySize: Size = Size.Medium;
// console.log(mySize);

// function sumOfNums(a: number, b: number): number {
//   //   let c; --> no uned locals
//   return a + b;
//   //   return a + b; --> no unused parameters
// }

// let sum = sumOfNums(3_5, 5); //35+5
// console.log(sum);

// function calculateTax(income: number, taxYear = 2022): number {
//   if ((taxYear || 2022) < 2022) return income * 0.2;

//   return income * 0.3;
// }

// const calc = calculateTax(10_000, 2001);
// console.log(calc);

// let user = { id: 1 };
// // employee.id = "Hajar"; --> error. id is number (it is possible in js)
// user.id = 5;
// console.log(user.id);

let employee: {
  readonly id: number;
  name: string;
  age?: number;
  retire: (date: Date) => void;
} = {
  id: 5,
  name: "Hajar",
  retire: (date: Date) => {
    console.log(date);
  },
};

// employee.id = 1; // error --> id is for only reading
employee.name = "Nigar";
// employee.age=21;

console.log(employee);
