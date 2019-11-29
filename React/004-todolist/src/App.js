import React,{Component,Fragment} from 'react'
import './App.css'

class App extends Component{
	constructor(props){
		super(props);
		//初始化
		this.state = {
			list:['吃饭','唱歌','跳舞','打豆豆'],
			task:''
		}
	}
	handleAdd(){
		//console.log('btn..')
		//console.log(this)
		const list = [...this.state.list,this.state.task];
		this.setState((preState)=>({
			list:list,
			task:''
		}))
	}
	handleInput(ev){
		const val = ev.target.value;
		this.setState((preState)=>({
			task:val
		}))
	}
	handleDel(index){
		const list = [...this.state.list];
		list.splice(index,1)
		this.setState((preState)=>({
			list:list
		}))
	}
	render(){
		return (
			<div className='App'>
				<input style={{width:900}} onChange={this.handleInput.bind(this)} value={this.state.task}/>
				<button className='btn' onClick={this.handleAdd.bind(this)}>提交</button>
				<ul className='list'>
					{
						/*
						<li>吃饭</li>
						<li>睡觉</li>
						<li>打豆豆</li>
						*/
						this.state.list.map((item,index)=>{
							return (<li key={index} onClick={this.handleDel.bind(this,index)}>
								{item}
								</li>)
						})
					}
				</ul>
			</div>)
	}
}

export default App