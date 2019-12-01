import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';//自定义组件必须以大写字母开头

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
/*
function tick(){
		 const element = (
		 	<div>
		 		<h1>hello</h1>
				<p id="timer">{new Date().toLocaleString()}</p>
		 	</div>
	 	)
		ReactDOM.render(
		  element,
		  document.getElementById('root')
		) 
}
setInterval(tick,1000)
*/