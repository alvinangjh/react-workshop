import "./App.css";
import Header from "./components/Header";
import AnotherPage from "./components/AnotherPage";
function App() {
	//1. Intro to JSX
	//In HTML, in order to create a div you do the following:
	// const myContainer = document.createElement("div");
	// const myTextNode = document.createTextNode("Hello World");
	// myContainer.append(myTextNode);

	//But, in JSX you do not have to do that as:
	//JSX acts as a syntactic sugar for React.createElement(...)
	const jsxContainer = <div>Hello World</div>;

	//To include expression in JSX -> REMEMBER TO INCLUDE {}
	const name = "";

	//2. Conditional rendering
	//Whether the user is logged in or not
	//const => constant <-- not reassign-able
	const isLoggedIn = true;
	var logInDisplay = "";

	//If-else is tedious, so nobody likes to do this
	if (isLoggedIn) {
		//I want to give an element that says you're logged in
		logInDisplay = <h1>You're logged in</h1>;
	} else {
		//I want to give an element that says you're not logged in
		logInDisplay = <h1>You're not logged in</h1>;
	}

	//the return method is what I want to return to React to render
	return (
		<div className="app">
			{/* Props, to pass in number or boolean, you need {} */}
			<Header name={1} />
			<AnotherPage />
			{/* <h1>Hello {name}</h1> */}

			{/* I want to display if the user is logged in*/}
			{/* ternary operator -> condition ? if yes then do what : if no then do what */}
			<h1>You're {isLoggedin ? "not" : null} logged in</h1>
			
			{/* && operator -> true & expression return the expression  */}
			<h1>You're {!isLoggedIn && "not"} logged in</h1>
		</div>
	);
}

export default App;
