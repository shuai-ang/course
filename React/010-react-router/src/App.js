import React,{Component} from 'react'
import './App.css'
import Todolist from './pages/todolist/index.js'

import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Home extends Component{
	render(){
		return (
			<h2>this is home page</h2>
		)
	}
}  
const ProtectedRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
	        window.localStorage.getItem('userInfo') ? (
	          <Component {...props}/>
	        ) : (
	          <Redirect to={{
	            pathname: '/login'
	          }}/>
	        )
	      )}
      />
    )
export default function App(){
	return (
			<Router>
				<div className="App">
					<nav>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/todolist">Todolist</Link></li>
							<li><Link to="/about">About</Link></li>
						</ul>
						<Route path="/" exact component={Home}/>
						<Route path="/todolist" component={Todolist}/>
						<Route path="/about" render={()=>(<h2>this is about page</h2>)}/>
					</nav>
				</div>
			</Router>
		)
}