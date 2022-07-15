// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// class Animal{
//   private name: string;
//   constructor(SName: string){
//     this.name = SName
//   }
// }
// new Animal('Cat').name;

// class Animal {
//   private name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
// }
// class Rhino extends Animal {
//   constructor() {
//     super('Rhino');
//   }
// }
// class Employee {
//   private name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
// }
// let animal = new Animal('Goat');
// let rhino = new Rhino();
// let employee = new Employee('Bob');
// animal = rhino;
// console.log(animal, rhino, employee);

// class Person {
//   protected name: string;
//   protected constructor(theName: string) { this.name = theName; }
// }
// class Employee extends Person {
//   private department: string;

//   constructor(name: string, department: string) {
//       super(name);
//       this.department = department;
//   }

//   public getElevatorPitch() {
//       return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//   }
// }let howard = new Employee("Howard", "Sales");
// let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.

// let myAdd = function (x: number, y: number): number {
//   return x + y;
// };
// console.log(myAdd);

// let deck = {
//   suits: ['hearts', 'spades', 'clubs', 'diamonds'],
//   cards: Array(52),
//   createCardPicker: function () {
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);

//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     };
//   },
// };
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// console.log(pickedCard);
// // alert('card: ' + pickedCard.card + ' of ' + pickedCard.suit);

// //泛型
// function identity<T>(arg: T): T {
//   return arg;
// }
// console.log(typeof identity(12));

// //明确指定T为String类型
// let output = identity<string>('myString');
// //利用类型推论，编译器会帮助我们确定
// let output1 = identity('myString');
// function loggingIdentity<T>(arg: T[]): T[] {
//   console.log(arg.length);
//   return arg;
// }

//泛型类型
// function identity<T>(arg: T): T{
//   return arg;
// }
// let myIdentity:<T>(arg : T) => T = identity;

//泛型接口
// interface GenericIdentityFn{
//   <T>(arg: T): T;
// }
// interface GenericIdentityFn<T> {
//   (arg: T): T;
// }
// function identity<T>(arg: T): T {
//   return arg;
// }
// let myIdentity: GenericIdentityFn<number> = identity;

interface Lengthwise{
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T{
  return arg;
}
