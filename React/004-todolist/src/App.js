import React,{Component,Fragment} from 'react'
import './App.css'

class App extends Component{
	constructor(props){
		super(props);
		//初始化
		this.state = {
			list:['吃饭','唱歌','跳舞','打豆豆']
		}
	}
	handleClick(){
		console.log('btn..')
		console.log(this)
	}
	handleInput(ev){
		console.log(ev.target.value)
	}
	render(){
		return (
			<div className='App'>
				<input style={{width:900}} onChange={this.handleInput.bind(this)}/>
				<button className='btn' onClick={this.handleClick.bind(this)}>提交</button>
				<ul className='list'>
					{
						/*
						<li>吃饭</li>
						<li>睡觉</li>
						<li>打豆豆</li>
						*/
						this.state.list.map((item,index)=>{
							return (<li key={index}>{item}</li>)
						})
					}
				</ul>
			</div>)
	}
}

export default App