import React from "react";
import PropTypes from "prop-types";

// This is a class component
// class Header extends React.Component {
//     render() {
//         return <h1>Hello</h1>
//     }
// }

//This is a functional component (highly encouraged to use this over class components)
function Header(props) {
	return (
		<div>
			{/* the prop name is "name" */}
			<h1>Let's be back by 4:51 {props.name} </h1>
		</div>
	);
}

//Arrow function -> no different from normal function, just easier to write.
//But when it comes to promises and callback, it has some special usage
// const Header = () => {

// }

//What is the default value for the props in the event that no props are passed to this component
Header.defaultProps = {
	name: "Someone's",
};

//Define what data type my variable should be
Header.propTypes = {
	name: PropTypes.string,
};

export default Header;
