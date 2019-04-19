//stateless functional compopnents
//class based components
//state, life cycle methods
//React Hooks
//Classes - Syntactical Sugar for constructor functions
//subclasses of components
//extends from component class
//inherits functionality
//Component class is used to transfer from basic E6 class
import React, { Component } from "react";
import {name, age, person} from "./data";
import Banner from "./components/Header/Banner"

//const App = () =>  (
// <section>
// 	<Banner/>
//  	<p>This is my content</p>
//  	<p>{name}</p>
//  	<p>{age}</p>
//  	<p>{person.name}</p>
//  </section>
//  );
class App1 extends Component {
	render(){
		return (
			<section>
			 	<Banner/>
		  		<p>This is my content</p>
	 			<p>{name}</p>
	 			<p>{age}</p>
	 			<p>{person.name}</p>
	  		</section>	
		);
	}
}
export default App1;