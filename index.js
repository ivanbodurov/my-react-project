import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect, createContext, useContext } from 'react';
import { useRef, useReducer, useCallback, useMemo } from 'react';
import { name, age } from './person.js';
import message from './message.js';
import Boat from './Boat.js';
import Motor from './Motor.js';
import Sportcar from './Sportcar.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Todos from "./Todos";
import AiCar from './AiCar';
//import './my-sass.scss';
import TodosCB from "./uCB-Todos";
import useFetch from "./useFetch";


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
const mySportcar = <Sportcar brand="Corvette" />;

//component in component, pass data, lists
function Vehicle(props) {
	return <li>I am a {props.type}</li>;
}
function Garage() {
	const vehicleType = [
		{id: 1, type: 'car'},
		{id: 2, type: 'truck'},
		{id: 3, type: 'helicopter'},
		{id: 4, type: 'private jet'},
		{id: 5, type: 'buggy'},
		{id: 6, type: 'car'}
	];
	return (
		<>
			<p>Who lives in my garage?</p>
			<ul>
				{vehicleType.map((item) => <Vehicle key={item.id} type={item.type} />)}
			</ul>
			{myPlane}
			{myBoat}
			{myMotor}
			{mySportcar}
		</>
	);
}

////React Events
const InvestMarket = () => {
	const buyBTC = () => {
		alert("Congrats! You have bought Bitcoin.");
	}
	const buyXMR = (msg) => {
		alert(msg);
	}
	const buyMSFT = (msg, b) => {
		alert(msg);
		alert("Event: " + b.type);
	}
	return (
		<>
			<button onClick={buyBTC}>Buy BTC</button>
			<br />
			<br />
			<button onClick={() => buyXMR("Congrats! You have bought Monero.")}>Buy XMR</button>
			<br />
			<br />
			<button onMouseOver={(event) => buyMSFT("Congrats! You have bought MSFT stocks.", event)}>Buy MSFT</button>
		</>
	);
}

//React Conditionals
function ConnectionEstablished() {
	return <h2>Connected!</h2>;
}
function ConnectionFailed() {
	return <h2>Connection failed.</h2>;
}

function Connection(props) {
	const isConnected = props.status;

	//regular if() statement
	// if (isConnected) {
	// 	 return <ConnectionEstablished />
	// }
	//  return <ConnectionFailed />

	 //ternary operator
	 return (
		 <>
		 	{(isConnected) ? <ConnectionEstablished /> : <ConnectionFailed />}
		 </>
	 )

}

function CryptoCollection(props) {
	const cryptoColl = props.collection;
	return (
		<>
		<h2>Crypto collection</h2>
		{cryptoColl.length > 0 && <p>My crypto collection consist {cryptoColl.length} types cryptocurrency.</p>}
		</>
	);

}
const collection = ['Bitcoin', 'Monero', 'Cardano', 'Solana', 'Litecoin'];

//React Forms
function MyForm() {
	const [name, setName] = useState("");
	const [inputs, setInputs] = useState({});
	const [textarea, setTextarea] = useState("The content of a textarea goes in the value='' attribute");
	const [myCrypto, setMyCrypto] = useState("ADA");

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({...values, [name]: value}));
		setTextarea((values) => ({...values, [name]: value}));
		setMyCrypto((values) => ({...values, [name]: value}));
		// setTextarea(event.target.value);
		// setMyCrypto(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		//alert(`The name you entered was: ${name}`);
		console.log(`The username you entered was: ${inputs.username}`);
		console.log(`The age was: ${inputs.age}`);
		console.log(`The message was: ${textarea.message}`);
		console.log(`The choosen cryptocurrency is ${myCrypto.cryptoList}`);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>Enter your username:</label><br />
			<input type="text"
				name="username"
 				value={inputs.username || ""}
				onChange={handleChange}
			/><br /><br />
			<label>Enter your age:</label><br />
			<input
			 	type="number"
				name="age"
				value={inputs.age || ""}
				onChange={handleChange}
				 /><br /><br />
			<label>Enter your message:</label><br />
			<textarea
			  name="message"
			  value={textarea.message || ""}
			  onChange={handleChange}
				 /><br /><br />
				 <label>Choose your cryptocurrency:</label><br />
				 <select name="cryptoList" value={myCrypto.cryptoList || ""} onChange={handleChange}>
				 	<option value="">Choose crypto..</option>
				 	<option value="BTC">Bitcoin</option>
					<option value="XMR">Monero</option>
					<option value="ADA">Cardano</option>
					<option value="SOL">Solana</option>
				 </select><br /><br />
			<input type="submit" />
		</form>
	);
}

//React Router
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="blogs" element={<Blogs />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

//React Memo
const TodosApp = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState(["Take breakfast", "Clean", "Pass tutorial", "Work on affiliate marketing"]);

	const increment = () => {
		setCount((counter) => counter + 1);
		console.log(count);
	};

	return (
		<>
			<ul>
				<Todos todos={todos} />
			</ul>
			<hr />
			<div>
				Count: {count}
				<button onClick={increment}>+</button>
			</div>
		</>
	);
}

// React CSS Styling
 const HeaderStyle = () => {
	 const myStyle = {
		 color: "white",
		 backgroundColor: "dodgerBlue",
		 padding: "10px",
		 fontFamily: "Sans-Serif"
	 }
	 return (
		 <>
		 	<h1>Hello Style!</h1>
			<p>Add a little style!</p>
		 </>
	 );
 }

 //React Sass Styling
 const HeaderSass = () => {
	 return (
		 <>
		 	<h1>Hello Sass!</h1>
			<p>Add a little sass style.</p>
		 </>
	 );
 }

 ////React Hooks
 function MyColor() {
 	const [color, setColor] = useState("red");
	return (
		<>
			<h1>My color is {color}!</h1>
			<button type="button" onClick={() => setColor("blue")}>Blue</button>
			<button type="button" onClick={() => setColor("red")}>Red</button>
			<button type="button" onClick={() => setColor("grey")}>Grey</button>
			<button type="button" onClick={() => setColor("orange")}>Orange</button>
			<button type="button" onClick={() => setColor("green")}>Green</button>
		</>
	);
 }

 //React useState Hook
 function FavoriteCar() {
 	// const [color, setColor] = useState("green");
	// const [brand, setBrand] = useState("Ford");
	// const [year, setYear] = useState("2022");
	// const [model, setModel] = useState("Mustang");
	const [car, setCar] = useState({
		brand: "Ford",
		color: "green",
		model: "Mustang",
		year: "2022"
	});

	const updateColor = () => {
		setCar((prevState) => {
			return {
				...prevState,
				color: "blue",
			};
		});
	}

	return (
		<>
			<h1>Dream Car</h1>
			<p>It is {car.color} {car.brand} {car.model} from {car.year}.</p>
			<button type="button" onClick={updateColor}>Blue</button>
		</>
	);
 }

 //React useEffect Hook
function Timer() {
		const [count, setCount] = useState(0);

		useEffect(() => {
			let timer = setTimeout(() => {
				setCount((c) => c + 1);
			});
			return () => clearTimeout(timer);
		}, []);

		return <h1>I've rendered {count} times!</h1>;
}

function Counter() {
	const [anothercount, setAnothercount] = useState(0);
	const [count, setCount] = useState(0);
	const [calculation, setCalculation] = useState(0);

	useEffect(() => {
		setCalculation(() => count * 4);
	}, [count]);

	return (
		<>
			<p>Count: {count}</p>
			<button type='button' onClick={() => setCount((c) => c + 1)}>+</button>
			<p>Calculation: {calculation}</p>
		</>
	);
}

//React useContext Hook
const UserContext = createContext();

function Component1() {
	const [user, setUser] = useState("John Doe");

	return (
		<UserContext.Provider value={user}>
			<h1>{`Hello ${user}!`}</h1>
			<Component2 />
		</UserContext.Provider>
	);
}
function Component2() {
	return (
		<>
			<h1>Component 2</h1>
			<Component3 />
		</>
	);
}
function Component3() {
	return (
		<>
			<h1>Component 3</h1>
			<Component4 />
		</>
	);
}
function Component4() {
	return (
		<>
			<h1>Component 4</h1>
			<Component5 />
		</>
	);
}
function Component5() {
	const user = useContext(UserContext);
	return (
		<>
			<h1>Component 5</h1>
			<h2>{`Hello ${user} again!`}</h2>
		</>
	);
}

//React useRef Hook
function AppRef() {
	const [inputValue, setInputValue] = useState("");
	const count = useRef(0);
	console.log("Render counter: " + count.current);
	const inputElement = useRef();
	const prevInputValue = useRef("");


	const focusInput = () => {
		inputElement.current.focus();
		console.log(inputElement.current);
	}

	useEffect(() => {
		count.current++;
		prevInputValue.current = inputValue;
	}, [inputValue]);

	console.log("prevInputValue: " + prevInputValue.current);

	return (
		<>
			<input
				type="text"
				value={inputValue}
				ref={inputElement}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button type="button" onClick={focusInput}>Focus Input</button>
			<h1>Render Count: {count.current}</h1>
			<h2>Current Value: {inputValue}</h2>
			<h2>Previous Value: {prevInputValue.current}</h2>
		</>
	);
}

// useReducer Hook
const initialTodos = [
	{
		id: 1,
		title: "Breakfast",
		complete: false
	},
	{
		id: 2,
		title: "Clean",
		complete: false
	},
	{
		id: 3,
		title: "Dropshipping",
		complete: false
	}
];

const reducer = (state, action) => {
	switch (action.type) {
		case "COMPLETE":
			const newState = state.map((todo) => {
				if (todo.id === action.id) {
					return { ...todo, complete: !todo.complete};
				} else {
					return todo;
				}
			});
			console.log(`Action ${action.title} completed. New status: ${action.type}`);
			return newState;
		default:
			return state;
	}
}

function TodosReducer() {
	const [todos, dispatch] = useReducer(reducer, initialTodos);

	const handleComplete = (todo) => {
		dispatch({ type: "COMPLETE", id: todo.id, title: todo.title });
	};

	return (
		<>
			{todos.map((todo) => (
				<div key={todo.id}>
					<label>
						<input type="checkbox" checked={todo.complete} onChange={() => handleComplete(todo)} />
						{todo.title}
					</label>
				</div>
			))}
		</>
	);
}

//React useCallback Hook
const AppCB = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);

	const increment = () => {
		setCount((c) => c + 1);
	};
	const addTodo = useCallback(() => {
		setTodos((t) => [...t, "New Todo"]);
	}, [todos]);

	return (
		<>
			<ul>
				<TodosCB todos={todos} addTodo={addTodo} />
			</ul>
			<hr />
			<div>
				Count: {count}
				<button onClick={increment}>+</button>
			</div>
		</>
	);
}

//React useMemo Hook
const AppMemo = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);
	const calculation = useMemo(() => expensiveCalculation(count), [count]);

	const increment = () => {
		setCount(c => c + 1);
	};
	const addTodo = () => {
		setTodos(t => [...t, "New Todo"]);
	};

	return (
		<div>
			<div>
				<h2>TO-DO List</h2>
				<ul>
					{todos.map((todo, index) => {
						return <li key={index}>todo</li>;
					})}
				</ul>
				<button type='button' onClick={addTodo}>Add Todo</button>
			</div>
			<hr />
			<div>
				Count: {count}
				<button type='button' onClick={increment}>+</button>
				<h2>Expensive Calculation</h2>
				{calculation}
			</div>
		</div>
	);
};

const expensiveCalculation = (num) => {
	console.log("Calculationg...");
	for (let i = 0; i < 1000000000; i++) {
		num++;
	}
	return num;
};

// React Custom Hooks
const HomeCustome = () => {
	const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

	return (
		<>
			<ul>
				{data && data.map((item) => {
					return <li key={item.id}>{item.title}</li>;
				})}
			</ul>
		</>
	);
}


//This comment line is to edit the file in 'html-skeleton' branch.
// This comment is from Git Pull Branch from Github..
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomeCustome />);



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

  // With a regular function, the keyword 'this' represents the object that called the function:
	changeColor = function() {
     console.log(this);
  }

  // With an arrow function, the keyword 'this' represents the Header class, NO matter who called the function:
  changeNumber = () => console.log(this);

}


const myheader = new Header();
//// The window object calls the function:
//window.addEventListener('load', myheader.changeColor); // logs the 'window' object..
//window.addEventListener('load', myheader.changeNumber); // Logs the Header class

//// The document object calls the function:
//document.addEventListener('click', myheader.changeColor); // Logs the #document object.
//document.addEventListener('click', myheader.changeNumber); // Logs the Header class

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
