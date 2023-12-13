// number, string, boolean, undefined, null, bigInt, symbol
// any, never, unknown, enum, tuple

//! Primitive Types
// let age: number = 20;
// if (age > 50) age += 10;


// let sales: string = "123_456_789";
// console.log(sales);

//! Array
let numbers: number[] = [1, 2, +"3"];

const fruits: string[] = ["banana", "fig", "mango"];
fruits[3] = "apple";
// fruits[1] = 1;

// fruits.push(1);

// fruits.map((item) => item.includes("a"));
// numbers.map((elem) => elem.toFixed(2));

//! Tuple
let arr: [number, string] = [1, "Hajar"];
// arr[1].padEnd()
// arr[2] = "Salam"
// arr.push("Salam");
// console.log(arr);

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

//! Functions
// function sumOfNums(a: number, b: number): number {
//     // let c; --> no uned locals
//   return a + b;
//   // return a ; //--> no unused parameters
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

//! Objects
// let employee: {
//   readonly id: number;
//   name: string;
//   age?: number;
//   retire: (date: Date) => void;
// } = {
//   id: 5,
//   name: "Hajar",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// employee.id = 1; // error --> id is for only reading
// employee.name = "Nigar";
// employee.age=21;

// console.log(employee);

//! Object types
type PersonType = { firstName: string; lastName: string };

function getInfo(person: PersonType) {
  return `${person.firstName} ${person.lastName}`;
}

//! Type Aliases
type Employee = {
  id: number;
  name?: string;
  retire: (date: Date) => void;
};

const obj: Employee = {
  id: 2,
  name: "NIgar",
  retire: (date) => {
    // console.log(date);
  },
};

//! Union Types
function inchToSm(length: number | string) {
  if (typeof length == "number") {
    return length * 2.54;
  } else {
    return parseInt(length) * 2.54;
  }
}

console.log(inchToSm(10));
console.log(inchToSm("10m"));

//! Intersection Types (never)
let x: number & string;

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//! Literal
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

//! Nullable
function greet(name: string | null | undefined): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hola");
  }
}

greet(null);

//! Interface
// interface PersondDetail {
//   firstName: string;
//   lastName?: string;
//   // age: number | undefined; //this is not what wee want
// }

// function getDetail(person: PersondDetail) {
//   return `${person.firstName}`;
// }

// console.log(getDetail({ firstName: "Hajar" }));

//! Union Types
// type StuffUnions = string | number | boolean;

//// const makeSomeStuff = (val: string | number | boolean): number => {
// const makeStuffUnion = (val: StuffUnions): number => {
//   if (typeof val === "number") return val + 10;

//   if (typeof val === "boolean") {
//     if (val) return 1;
//     return 0;
//   }

//   return val.length;
// };

// console.log(makeSomeStuff(5));
// console.log(makeSomeStuff("Hajar"));
// console.log(makeSomeStuff(false)); //return 0
// console.log(makeSomeStuff("false")); //return 5
// console.log(makeSomeStuff("5")); //return 1

//! Task 
// type User = {
//   id: number;
//   name: string;
//   age: number;
//   // role: string;
//   role: "admin" | "user" | "super-admin";
// };

// ! Role must be either admin or user or super-admin
// const user: User = {
//   id: 1,
//   name: "Hajar",
//   age: 21,
//   role: "super-admin",
// };
