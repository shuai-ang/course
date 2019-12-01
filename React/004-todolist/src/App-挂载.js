import React,{Component,Fragment} from 'react'
import './App.css'
import Item from './Item.js'

class App extends Component{
	constructor(props){
		console.log('App constructor')
		super(props);
		//初始化
		this.state = {
			list:['吃饭','唱歌','跳舞','打豆豆'],
			task:''
		}
		this.handleInput = this.handleInput.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}
	static getDerivedStateFromProps(props, state){
		console.log('App getDerivedStateFromProps',(props,state))
		return {task:'aaa'};
	}
	handleAdd(){
		//console.log('btn..')
		//console.log(this)
		const list = [...this.state.list,this.state.task];
		this.setState((preState)=>({
			list:list,
			task:''
		}),()=>{
			console.log(this.ul.childNodes)
		})
		// console.log(this.ul.childNodes)
	}
	handleInput(ev){
		//const val = ev.target.value;
		//console.log(this.input)
		const val = this.input.value;
		this.setState((preState)=>({
			task:val
		}))
	}
	handleDel(index){
		// console.log(index)
		const list = [...this.state.list];
		list.splice(index,1)
		this.setState((preState)=>({
			list:list
		}))
	}
	getItems(){
		return this.state.list.map((item,index)=>{
					/*
					return (<li key={index} onClick={this.handleDel.bind(this,index)}>
						{item}
						</li>)
					*/
					return (
							<Item key={index} 
							task={item}
							list={this.state.list}
							index={index}
							handleDel={this.handleDel.bind(this,index)}
							/>
						)
				})
	}
	componentDidMount(){
		console.log('App componentDidMount')
	}
	render(){
		console.log('App render')
		return (
			<div className='App'>
				<input ref={(input)=>{this.input = input}} style={{width:900}} onChange={this.handleInput} value={this.state.task}/>
				<button className='btn' onClick={this.handleAdd}>提交</button>
				<ul className='list' ref={(ul)=>{this.ul = ul}}>
					{
						/*
						<li>吃饭</li>
						<li>睡觉</li>
						<li>打豆豆</li>
						*/
						this.getItems()
					}
				</ul>
			</div>)
	}
}

export default App