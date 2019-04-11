import React from 'react';
import ReactDOM from 'react-dom';

function Greeting(){

	return <h1>My first React app</h1>;
}
ReactDOM.render(<Greeting/>, document.getElementById('root'));