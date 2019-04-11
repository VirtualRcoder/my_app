import React from 'react';
import ReactDOM from 'react-dom';

//function Greeting(){
//stateless functional component
//always return JSX

//	return (<div>
//		<h1>My first React app</h1>
//		</div>);
//}
/*three arguments element, propsObject, children*/

function Greeting(){

	return React.createElement("div",{},"My first react app")
}

ReactDOM.render(<Greeting/>, document.getElementById('root'));