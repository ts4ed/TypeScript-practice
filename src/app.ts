// let age: number = 50;
// let names: string = "Max";
// let toggle: boolean = true;
// let empty: null = null;
// let notInitialize: undefined = undefined;
// let callback = (a: number) => {
//   return 100 + a;
// };

// let anything: any = -20;
// anything = "Text";
// anything = {};

// let some: string;
// some = "Text";

// let str: string;

// if (typeof some === 'string') {
//   str = some;
// }

// let person: [string, number]
// person = ["Max", 21];

// enum Load {LOADING, READY};

// const page {
//   load: Load.READY
// }

// if (page.load === Load.LOADING) {
//   console.log('Страница загружается');
// }
// if (page.load === Load.READY) {
//   console.log('Страница загружена');
// }

// let union: string | number;

// let literal: "enable" | "disable";

// function showMessage(message: string): void {
//   console.log(message);
// }

// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error("Error");
// }

// type Page = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: "open" | "close";
//   details?: {
//     createAt: Date;
//     updateAt: Date;
//   };
// };

// const page1: Page = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: "2021-01-01",
//     updateAt: "2021-05-01",
//   },
// };

// const page2: Page = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };

// class Key {
//   private signature: number;

//   constructor() {
//     this.signature = Math.random();
//   }

//   getSignature(): number {
//     return this.signature;
//   }
// }

// class Person {
//   constructor(private key: Key) {}
//   getKey(): Key {
//     return this.key;
//   }
// }

// abstract class House {
//   protected door = false;
//   private tenants: Person[] = [];
//   constructor(protected key: Key) {}

//   comeIn(person: Person): void {
//     if (!this.door) {
//       throw new Error("Door is close");
//     }

//     this.tenants.push(person);
//     console.log("Person inside");
//   }

//   abstract openDoor(key: Key): boolean;
// }

// class MyHouse extends House {
//   openDoor(key: Key) {
//     if (key.getSignature() !== this.key.getSignature()) {
//       throw new Error("Key to another door");
//     }

//     return (this.door = true);
//   }
// }

// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

// function getPromise(): Promise<Array<string | number>> {
//   return new Promise((resolve) => {
//     resolve(["Text", 50]);
//   });
// }

// getPromise().then((data) => {
//   console.log(data);
// });

// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };

// function foo(
//   top: Pick<AllType, "name" | "color">,
//   bottom: Pick<AllType, "position" | "weight">
// ): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

// function merge<T extends object, U extends object >(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// class Component<T> {
//   constructor(public props: T) {}
// }

// interface IProps {
//   title: string,
// }

// class Page extends Component<IProps> {
//   pageInfo() {
//     console.log(this.props.title);
//   }
// }
