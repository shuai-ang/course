import React,{Component} from 'react'
import './App.css'
import { Input,Button,Row,Col,List, Typography } from 'antd';
import AppUI from './AppUI.js'
import store from './store/index.js'
import {changeAction,
		addAction,
		delAction,
		getRequestLoadeDataAction
		}from './store/createActions.js'
import axios from 'axios'
//容器组件
class App extends Component{
	constructor(props){
		super(props);
		this.handleInput = this.handleInput.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		this.handleDel = this.handleDel.bind(this)
		console.log(store)
		this.state = store.getState()
		store.subscribe(()=>{
			this.setState(store.getState())
		})
	}
	componentDidMount(){
		/*
		axios.get('http://127.0.0.1:3000')
		.then(result=>{
			store.dispatch(getLoadInitAction(result.data))
		})
		.catch(err=>{
			console.log(err)
		})
		*/
		// store.dispatch(getLoadInitAction())

		store.dispatch(getRequestLoadeDataAction())
	}
	handleAdd(){

		store.dispatch(addAction())
	}
	handleInput(ev){
		const val = ev.target.value;
		
		store.dispatch(changeAction(val))
	}
	handleDel(index){
		
		store.dispatch(delAction(index))
	}
	
	render(){
		// console.log('App render')
		return (
			<AppUI 
			task={this.state.task}
			list={this.state.list}
			handleInput={this.handleInput}
			handleAdd={this.handleAdd}
			handleDel={this.handleDel}
			/>
		)
	}
}

export default App