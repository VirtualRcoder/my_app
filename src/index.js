import React from 'react';
import ReactDOM from 'react-dom';

//JSX RULES
//reutrn single element
//div / section / article
//use camelCase for html attribute
//className instead of class
//close every element 
//formatting

//ES6, Nested Components and React Tools

function Greeting(){

	return (
		<section>
			<Person/>
			<Message/>
		</section>		
		);
}

const Person =() => <h2>Shubham Sharma</h2>;
const Message =() => <p>This is my third year</p>;
ReactDOM.render(<Greeting/>, document.getElementById('root'));