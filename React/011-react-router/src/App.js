import React,{Component} from 'react'
import './App.css'
import Todolist from './pages/todolist/index.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App(){
	return (
			<Router>
				<div>
					<nav>
						<ul>
							<li><Link exact to="/">Home</Link></li>
							<li><Link to="/todolist">Todolist</Link></li>
						</ul>
					</nav>
				</div>
			</Router>
		)
}