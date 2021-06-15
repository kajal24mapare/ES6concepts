// ES6 or ES2015
// node ES6concepts.js

// ----------const or immutable variable--------------

const PI = 3.14;
// PI = 3 // throw error
console.log(PI);

// ----------scoping--------------
// Block level

function foo() {
  // function level scope - js hoisting
  console.log("outside", i);
  for (var i = 1; i <= 5; i++) {
    console.log("inside", i);
  }
  console.log("outside", i);
}

foo();

function bar() {
  // console.log('outside', j);  // ReferenceError: j is not defined
  for (let j = 1; j <= 5; j++) {
    // j block level
    console.log("inside j", j);
  }
  //   console.log("outside", j);    // ReferenceError: j is not defined
}

bar();

function fun3() {
  let k = 10;
  console.log("outside k", k);
  {
    let k = 7;
    console.log("inside k", k);
  }
  console.log("outside k", k);
}

fun3();

// scope of const is same as let + it cant't be changed
function fun4() {
  const k = 10;
  console.log("outside k", k);
  {
    let k = 7;
    console.log("inside k", k); // block level scope
  }
  console.log("outside k", k);
}

fun4();

// block level functions
{
  function fun5() {
    return 1;
  }
  console.log(fun5() === 1);
  {
    function fun5() {
      return 2;
    }
    console.log(fun5() === 2);
  }
  console.log(fun5() === 1);
}

// ----------arrow functions or lambda expressions--------------
function add(x, y) {
  return x + y;
}

console.log(add(3, 4));

//  arrow function
let addNum = (x, y) => x + y;
console.log(addNum(5, 6));
// () => expression
// () => {statements}

// expression bodies
let evens = [2, 4, 6, 8, 10];
console.log("EVENS: ", evens);
console.log(
  "ODDS: ",
  evens.map((v) => v + 1)
);

let pairs = evens.map((v) => ({ even: v, odd: v + 1 }));
for (let i in pairs) {
  console.log(pairs[i]);
}

console.log(
  "Nums: ",
  evens.map((v, index) => v + index)
);

// Statement bodies
let numbers = [1, 2, 3, 4, 5];
let fives = [];
console.log(numbers);
numbers.forEach((v) => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});
console.log(fives);

// lexical this
/* 
    function Person() { // constructor function
    this.age = 10;
    setInterval(function growUp() {   // scope all over window 
        this.age++;
        console.log(this.age);  // will print NaN
    }, 1000);
    }
*/

// es5
function Person() {
  // constructor function
  var that = this;
  that.age = 10;
  setInterval(function growUp() {
    // scope all over window
    that.age++;
    // console.log(that.age);
  }, 1000);
}
// let person = new Person();
// console.log(person.age);

// es6
function Person2() {
  this.age = 20;
  // arrow function doesn't create new context, it uses enclosing context
  setInterval(() => {
    this.age++;
    // console.log(this.age);
  }, 1000);
}

let person2 = new Person2();
// console.log(person2.age);

// ----------Estended parameter handling--------------
// typescript = es5 + es6 + other features(added by MS)

function foo(x, y, z) {
  // need to write check for each arg like if (x === undefined) x = 0 etc.
  return x + y + z;
}
console.log(foo()); // NaN
console.log(foo(1, 2, 3));

// es6
//default params
function bar(x = 0, y = 0, z = 0) {
  return x + y + z;
}
console.log(bar());

// rest params - aggr of remaining into single param of function/
// collects multipe elems and condenses to single
function funI(x, y, ...a) {
  return (x + y) * a.length;
}
console.log(funI(4, 5, "hello", true, 0.5));

// spread operator
// spreading of element  of an iterable collection like an array or string
// into individual elem/ indiv. fun. params
function myFun(x, y, z) {
  console.log(x, y, z);
}
myFun([1, 2, 3]);
myFun(...[1, 2, 3]);

console.log([1, 2, [10, 20, 30], 4]);
console.log(...[1, 2, [10, 20, 30], 4]);
console.log(...[1, 2, ...[10, 20, 30], 4]);

// concat arr1 with arr2
console.log([...[1, 2, 3], ...[4, 5, 6]]);

console.log("str: ", "kajal", "chars: ", [..."kajal"]);

// -----------Template literal-------------
console.log("This is a line: \n");
console.log("This is a line: '\n'");

// backticks
console.log(`first
second
third`);

// string interpolation
let str = "kajal";
var msg = `My name is ${str}`;
console.log(msg);

// custom interpolation
// flexible expr interpolation for arbitary method
console.log(`My name is ${str.toUpperCase()}`);

// Tagged template
// transforms template str by placing fun nm before templ str
var name = "abc";
var age = 20;
function myTag(strings, personExp, ageExp) {
  var str0 = strings[0];
  var str1 = strings[1];
  var str3 = strings[2];
  var ageStr;
  if (ageStr > 40) {
    ageStr = "older";
  } else {
    ageStr = "younger";
  }
  return str0 + personExp + str1 + ageExp + str3;
}

console.log(`That person = ${name} is ${age} yrs old`);
console.log(myTag`That person = ${name} is ${age} yrs old`);

// ------------classes------------
// es5
function getStudent(name, marks) {
  return { name: name, marks: marks };
}

//es 6
function getStudent2(name, marks) {
  // property shorthand
  return { name, marks };
}

var stud = getStudent("kajal", 93);
var stud2 = getStudent2("kajal", 85);
console.log(stud, stud2);

// es5
var human = {
  name: "Mapare",
  greetHuman: function () {
    console.log("Hello ", this.name, "!");
  },
};
human.greetHuman();

// es6
var human2 = {
  name: "Kajal Mapare",
  // method property- consise method style
  greetHuman() {
    console.log("Hello ", this.name, "!");
  },
};
human2.greetHuman();

// to create class, no hoidting
class Shape {
  // OR let Shape = class {
  constructor(id, x, y) {
    this.id = id;
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
}
var line = new Shape();
line.move(3, 4);

// getter setter
class Rect {
  // _ private(just for reading purpose, not actually private)
  constructor(height, width) {
    this._height = height;
    this._width = width;
  }
  set width(w) {
    this._width = w;
  }
  get width() {
    return this._width;
  }
  set height(h) {
    this._height = h;
  }
  get height() {
    return this._height;
  }
  get area() {
    return this._height * this._width;
  }
}
var r = new Rect(2, 4);
console.log(r._width, r._height, r.area);

// class inheritance
// es5 - prototype chaining
var Shape2 = function (sId, x, y) {
  this.sId = sId;
};
Shape2.prototype.toString = function (x, y) {
  return `shape ${this.sId}`;
};
var Rectangle = function (sId, x, y, height, width) {
  Shape2.call(this, sId, x, y); // classical inheritance, this of Rectangle
};
Rectangle.prototype.toString = function () {
  return `Reactangle> ${Shape2.prototype.toString.call(this)}`;
};

var r = new Rectangle(100, 4, 5);
console.log(r.toString());

// es6
class Shape3 {
  constructor(id) {
    this.id = id;
  }
  toString() {
    return `Shape ${this.id}`;
  }
}

class Reactangle3 extends Shape3 {
  constructor(id, x, y, height, width) {
    super(id, x, y);
  }
  toString() {
    return `Rectangle ${super.toString()}`;
  }
}
var r2 = new Rectangle(100, 4, 5);
console.log(r2.toString());

// class inheritance from expressions
function Rect2(len, width) {
  this.len = len;
  this.width = width;
}
Rect2.prototype.calcArea = function () {
  return this.len * this.width;
};
function getBase() {
  return Rect2;
}
class Square extends getBase() {
  constructor(len) {
    super(len, len);
  }
}
var sq = new Square(10, 20);
var rec = new Rect2(10, 20);
console.log(sq.calcArea());
console.log(rec.calcArea());
console.log(sq instanceof Rect2);

/*
    class A {}
    class B {}
    class C extends A,B{}

    class for creating multi inheritance: multi

    class C extends multi.inherit(A,B){}
*/

// ------------dependencies in package.json------------
// webpack - module bundler, can be used in devpt(webpack-dev-server) as well as prod phase
// webpack config - webpack.dev.js, webpack.prod.js
// webpack merge - common webpack config. along with prod webpack conf.

// rimraf - remove forceable

// babel - JS compiler, transpiler that understands import n export, es6 -> es5/ any other
// instead require we use import and export
// import * as math from './src/math';
// use as math.sum(1,2)
// if exported default, use as import {sum} from './src/math'
// exporting const as default at time of declaration not possible
// export default const PI = 3.14 WRONG, const PI = 3.14; export default PI;
// import PI from './src/math';
// cannot declare multiple defaults in 1 file

// browserify - specific to node modules

// ------------Array Destructuring------------
// array matching
// es5
var list = [1, 2, 3, 4];
var a = list[0];
var b = list[1];
var temp = a;
a = b;
b = temp;
console.log(a, b);

// es6
var [x, , y] = list;
console.log(x, y); // 1,3

var [y, x] = [x, y];
console.log(x, y); // 3,1

// object matching
function getNode() {
  return {
    op: "op",
    lhs: "lhs",
    rhs: "rhs",
  };
}

const { op, lhs, rhs } = getNode();
console.log(lhs, op, rhs);

const obj = { op: "operand", lhs: "LHS", rhs: "RHS" };
const { op: o, lhs: l, rhs: rh } = obj;
console.log(l, o, rh);

// deep matching
let cust = {
  name2: "Kajal",
  address: {
    city: "Pune",
    state: "Maharashtra",
  },
};

let { name2, address } = cust;
console.log(name2, address);
//deep match
let {
  address: { city: city },
  address: { state: state },
} = cust;
console.log(city, state);

// failsoft destructuring
var list2 = [7, 12];
var [a = 1, b = 2, c = 3, d] = list;
console.log(a, a === 7);
console.log(b, b === 12);
console.log(c, c === 13);
console.log(d, d === undefined);

// set
let s = new Set();
s.add(1);
s.add(2);
s.add(1); // ignored
console.log(s, s.size);
console.log(s.has(1));

// converting set to array
let s2 = new Set([1, 2, 3]);
let arr = [...s2];
console.log(arr);

// weakset - keys are weak ref not the values, key-obj not primitive
let s3 = new WeakSet();
// let obj2 = 5; //prim val-invalid val used in weak set
let obj2 = {};
s3.add(obj2);
console.log(s3);

// map
let m = new Map();
m.set("book", "es6");
m.set("pubYr", 2015);
m.set(NaN, 123); // valid
console.log(m.get(NaN), m.get("book"), m.size, m.has("name"));
m.clear();
console.log(m);

// -----------Iterators---------------
// iterable data sources - arrays,strings,maps,sets,arguments
// DOM data structures(querySelectorAll()) etc
// object is not iterable collection
// suitable loop: for-of
var arr2 = ["a", "b", "c"];
const iter = arr2[Symbol.iterator]();
console.log(iter.next()); // { value: 'a', done: false }
console.log(iter.next()); // { value: 'b', done: false }
console.log(iter.next()); // { value: 'c', done: false }
console.log(iter.next()); // { value: undefined, done: true }

// -----------Generator---------------
// function *newIterator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
function* newIterator(items) {
  for (let k = 0; k < 3; k++) {
    yield items[k];
  }
}
let iterators = newIterator([1, 2, 3]);
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());

// -----------typed array---------------
var buffer = new ArrayBuffer(8);
console.log(buffer.byteLength);
var view = new DataView(buffer);
console.log(view.byteLength);

// view.setInt8(0,3);
// console.log(view.getInt8(0));  // 3
view.setInt32(0, 3);
console.log(view.getInt8(0));
console.log(view.getInt8(1));
console.log(view.getInt8(2));
console.log(view.getInt8(3));
// console.log(view.getInt32(0));  // 3

var bigView = new Int32Array(buffer);
console.log(bigView);

// -----------New builtin methods---------------
// object.assign
var obj3 = { a: 1, b: { c: 2 } };
var copy = Object.assign({}, obj3);
console.log("before change", copy, copy.a, copy.b, copy.b.c);
console.log("object: ", obj3);
copy.a = 10;
copy.b.c = 40;
console.log("after change", copy, copy.a, copy.b, copy.b.c);
console.log("object: ", obj3);

// deep cloning
var obj4 = { a: 1, b: { c: 2 } };
var deepCopy = JSON.parse(JSON.stringify(obj4));
console.log("before change", deepCopy, deepCopy.a, deepCopy.b, deepCopy.b.c);
console.log("object: ", obj4);
deepCopy.a = 100;
deepCopy.b.c = 400;
console.log("after change", deepCopy, deepCopy.a, deepCopy.b, deepCopy.b.c);
console.log("object: ", obj4);

var o1 = { a: 1 };
var o2 = { b: 1 };
var o3 = { c: 1 };
var obj5 = Object.assign(o1, o2, o3);
console.log(obj5, o1, o2, o3);

// string methods- startsWith,endsWith,includes
console.log(
  name2.repeat(4),
  name2.startsWith("ajal"),
  name2.startsWith("ajal", 1),
  name2.endsWith("l"),
  name2.endsWith("l", 1),
  name2.includes("aja"),
  name2.includes("ajal", 1)
);

// Number
console.log(
  Number.isFinite(Infinity),
  Number.isFinite(-Infinity),
  Number.isFinite(NaN),
  Number.isFinite(21),
  Number.isFinite(-32),
  NaN === NaN,
  Number.isNaN(NaN),
  Number.EPSILON
);

// -----------promises-------------
// created promise resolved immediately
var promise1 = Promise.resolve("I am resolved");
promise1.then((res) => console.log(res));

// define std promise resolve after 2 secs
// handler receives value from promise but cannot change the value of promise itself
// good to be immutable as receives same value even on calling mult times

// unsettled promise
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(4), 2000);
});
promise2.then((res) => console.log(res));

// handling reject in promises
var promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("Time out!"), 2000);
});
promise3.then(
  (res) => console.log(res),
  (errorMsg) => console.log(errorMsg)
);
promise3.catch((res) => console.log(res));

/*
  p = Promise.all[p1,p2,p3];
  p.then((res) => {
    console.log(Array.isArray(res), res[0], res[1], res[2]);
  });
*/
