// ====================== 基础接口 ======================
// 1. 最简单的接口
interface Person {
  name: string;
  age: number;
}

const john: Person = {
  name: "John Doe",
  age: 30
};

// ====================== 可选属性 ======================
interface Config {
  url: string;
  method?: 'GET' | 'POST'; // 可选属性
  timeout?: number;
}

const config1: Config = { url: "/api/data" }; // method和timeout是可选的
const config2: Config = { 
  url: "/api/save", 
  method: "POST", 
  timeout: 5000 
};

// ====================== 只读属性 ======================
interface Point {
  readonly x: number;
  readonly y: number;
}

const origin: Point = { x: 0, y: 0 };
// origin.x = 1; // 错误: 无法分配到"x"，因为它是只读属性

// ====================== 函数类型 ======================
interface SearchFunc {
  (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = function(src, sub) {
  return src.search(sub) > -1;
};

// ====================== 可索引类型 ======================
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ["Bob", "Fred"];
const firstItem: string = myArray[0];

// ====================== 类类型 ======================
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
}

// ====================== 继承接口 ======================
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

const square: Square = {
  color: "blue",
  sideLength: 10
};

// 多接口继承
interface PenStroke {
  penWidth: number;
}

interface Circle extends Shape, PenStroke {
  radius: number;
}

const circle: Circle = {
  color: "red",
  penWidth: 5,
  radius: 10
};

// ====================== 混合类型 ======================
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = function (start: number) {} as Counter;
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

const c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// ====================== 接口继承类 ======================
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

// ====================== 动态属性 ======================
interface FlexibleObject {
  [key: string]: any;
}

const flexObj: FlexibleObject = {
  name: "Flexible",
  count: 42,
  active: true
};

// ====================== 泛型接口 ======================
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const pair1: KeyValuePair<number, string> = { key: 1, value: "one" };
const pair2: KeyValuePair<string, boolean> = { key: "isActive", value: true };

// ====================== 导出接口 ======================
export interface User {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export interface ApiResponse<T> {
  status: 'success' | 'error';
  data: T;
  message?: string;
  timestamp: Date;
}

// ====================== 使用示例 ======================
export function createUser(user: User): ApiResponse<User> {
  return {
    status: 'success',
    data: user,
    timestamp: new Date()
  };
}

// ====================== 类型断言与接口 ======================
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear = {} as Bear;
bear.name = "Winnie";
bear.honey = true;

// ====================== 函数重载 ======================
interface Overloaded {
  (x: string): string;
  (x: number): number;
}

const overloadedFunc: Overloaded = (x: any) => x;

// ====================== 导出所有接口 ======================
export { 
  Person, Config, Point, SearchFunc, StringArray, 
  ClockInterface, Square, Circle, Counter, FlexibleObject,
  KeyValuePair
};