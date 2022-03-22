import Header from "./Header";
import React from "react";

function AnotherPage(props) {
	//useState hook
	//the first parameter is what you are going to name your state/container
	//the second parameter here is what you are going to use to set your state
	//todos is my list of to-do things -> to update my todos, setTodos

	//state is immutable
	//you cannot do todos.push() <-- .add
	// const [todos, setTodos] = React.useState([
	// 	{ text: "Learn about React" },
	// 	{ text: "Meet friend for lunch" },
	// 	{ text: "Build really cool todo app" },
	// ]);

	//The method to add in elements to the todos array
	//setTodos is being called here to update the state
	//... is a spread operator -> get what is in the array
	// const addTodo = (text) => {
	// 	const newTodos = [...todos, { text }];
	// 	setTodos(newTodos);
	// };

	//useEffect is just do something (effect) when something changed
	//It's a react hook that observe any changes to the dependencies
	React.useEffect(() => {
		// This will run when the page first loads and whenever the title changes
		// Good for when you are connecting to API and you want to first load something
	}, []);

	//.map -> creating a new array of items by mapping over
	return (
		<div>
			{/* {todos.map((todo, index) => (
				<div> {todo.text}</div>
			))} */}
		</div>
	);
}

export default AnotherPage;
