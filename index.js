import React from 'react';
import ReactDOM from 'react-dom/client';
import {name, age} from './person.js';
import message from './message.js';
import Boat from './Boat.js';
import Motor from './Motor.js';


const myFirstElement = <h1>Hello React!</h1>;
const mySecondElement = <h2>Hello ReactJS!</h2>;

// ReactDOM.render(<p>This is a paragraph by ReactDOM.render().</p>, document.getElementById('root'));

// render HTML and JSX
const element = (
	<table border='1'>
		<tr>
			<th>Name</th>
		</tr>
		<tr>
			<td>Lisa</td>
		</tr>
		<tr>
			<td>Jake</td>
		</tr>
		<tr>
			<td>Dana</td>
		</tr>
		<tr>
			<td>Rufus</td>
		</tr>
	</table>
);
// jsx > expression
const element2 = <h2>React is {2 + 3} times better than JSX.</h2>;

//html on multiple lines use ()
const list = (
	<ul>
		<li>Apples</li>
		<li>Bananas</li>
		<li>Cherries</li>
		<li>Oranges</li>
		<li>Plums</li>
		<li>Peaches</li>
	</ul>
);
//top level element: '<div>'
const topLevelEl = (
	<div>
		<p>First paragraph.</p>
		<p>Second paragraph.</p>
	</div>
);
// fragment <> </>
const fragment = (
	<>
		<p><b>First paragraph.</b></p>
		<p><b>Second paragraph.</b></p>
		<p><b>Third paragraph.</b></p>
	</>
);
// Elements Must be Closed and to add a class use 'className' instead of 'class',
const closedInputEl = <input className="inputRedBg" type="text" />;

//if() statements with jsx
const myNum = 4;
let text = 'Hello';
if (myNum > 2) {
	text = 'Good';
}

const element3 = <h1>{text}</h1>;
const element4 = <h1>{(myNum < 44) ? "Hello" : "Bye"}</h1>;

//React Components
//class component
class House extends React.Component {
	render() {
		return <h2>Hi, I am a House!</h2>;
	}
}
//function component with prop
function Plane(props) {
	return <h2>Hi, I am a {props.color} plane {props.brand}!</h2>;
}

//React Props
const planeColorValue = "green";
const planeBrandValue = "Airbus A320";
const boatFeature = {
	type: 'motor',
	color: 'white'
}
const motorFeature = {
	brand: "Ducati",
	color: "red"
}

const myPlane = <Plane color={planeColorValue} brand={planeBrandValue} />
const myBoat = <Boat feature={boatFeature} />
const myMotor = <Motor feature={motorFeature} />;
//component in component, pass data
function Garage() {
	return (
		<>
			<p>Who lives in my garage?</p>
			{myPlane}
			{myBoat}
			{myMotor}
		</>
	);
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);




//ES6 Overview
class Car {
  constructor(name) {
    this.brand = name;
  }
  present() {
    return 'My car is ' + this.brand;
  }
}

class Model extends Car {
  constructor(carName, mod) {
      super(carName);
      this.model = mod;
  }
  show() {
    return this.present() + ' and it is ' + this.model;
  }
}

let mycar = new Car('Ford');
console.log(mycar.brand);
console.log(mycar.present());

let mycarModel = new Model('Ford', 'Mustang');
console.log(mycarModel.show());

//arrow functions
let gpu = model => 'GPU: ' + model;
console.log(gpu('Geforce GTX 1650 4GB'));


class Header {
  constructor() {
    this.color = "Red";
    this.number = 'PB 1234 BP';
  }

  // With a regular function, this represents the object that called the function:
  changeColor = function() {
    console.log(this);
  }

  // With an arrow function, this represents the Header class NO matter who called the function:
  changeNumber = () => console.log(this);

}


const myheader = new Header();
// The window object calls the function:
window.addEventListener('load', myheader.changeColor); // logs the 'window' object..
window.addEventListener('load', myheader.changeNumber); // Logs the Header class

// The document object calls the function:
document.addEventListener('click', myheader.changeColor); // Logs the #document object.
document.addEventListener('click', myheader.changeNumber); // Logs the Header class

// es6 variables
if (true) {
  var a = 1; // global scope because of if() {} block
}
console.log(a); // 1

function num() {
  var number = 2;
}
num();
// console.log(number); // Error.. because of function scope only and not block.

if (true) {
  let b = 2;
}
// console.log(b); // Error.. because of block scope.

if (true) {
  const c = 4;
  // c = 5; -> TypeError: Assignment to constant variable.
}
// console.log(c); // Error.. because of block scope.

//ES6 array methods .map()
const myArray = ['Banana', 'Orange', 'Apple'];
let myList = myArray.map((item) => {
  console.log(item.toUpperCase());
});

//es6 destructuring
const vehicles = ['mustang', 'f-150', 'expedition'];
const [car,, suv] = vehicles;
console.log([car,, suv]);
let calculate = (a, b) => {
  let add = a + b;
  let substract = a - b;
  let multiply = a * b;
  let devide = a / b;
  return [add, substract, multiply, devide];
}
let [add, substract, multiply, devide] = calculate(2, 8);
console.log('Sum = ' + add + '. Difference = ' + substract + '. Product = ' + multiply + '. Quotient = ' + devide);

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2022,
  color: 'lightblue',
  registeration: {
    city: 'Washington',
    state: 'Washington',
    country: 'USA'
  }
}

let myVehicle = ({brand, type, registeration:{state}, year, model, color}) => {
  //const message = 'My ' + vehicle.type + ' is ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '. It\'s manufactured ' + vehicle.year + '.';
  const message = 'My ' + type + ' is ' + color + ' ' + brand + ' ' + model + '. It\'s manufactured ' + year + '. The ' + type + ' is registered in ' + state + '.';
  console.log(message);
}

myVehicle(vehicleOne);

// ES6 modules
// import statement is on top of code..
console.log(`My name is ${name} I am ${age}.`);
console.log(message());

// ES6 Ternary Operator
let ternaryNum = 7;
ternaryNum >= 18 ? console.log('Old enough.') : console.log('Too young!');;

// ES6 Spread Operator
let myNumbers1 = [1,2,3,4];
let myNumbers2 = [5,6,7,8,9,10];
let numbersCombined = [...myNumbers1, ...myNumbers2];
console.log(numbersCombined);

let myNumbers3 = [1,2,3,4,5,6,7,8];
const [one, two, three, ...rest] = myNumbers3;
console.log(one, two, three,rest);

const myVehicle1 = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateVehicle = {
  type: 'car',
  year: '2023',
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle1,...updateVehicle}
console.log(`The color of my updated vehicle is now ${myUpdatedVehicle.color}.`);
