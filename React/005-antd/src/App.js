import React,{Component,Fragment} from 'react'
import './App.css'
// import 'antd/dist/antd.css';
import Item from './Item.js'
import { Input,Button,Row,Col,List, Typography } from 'antd';

class App extends Component{
	constructor(props){
		super(props);
		//初始化
		this.state = {
			list:['吃饭','唱歌','跳舞','打豆豆'],
			task:''
		}
		this.handleInput = this.handleInput.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}

	handleAdd(){
		//console.log('btn..')
		//console.log(this)
		const list = [...this.state.list,this.state.task];
		this.setState((preState)=>({
			list:list,
			task:''
		}))
		// console.log(this.ul.childNodes)
	}
	handleInput(ev){
		const val = ev.target.value;
		//console.log(this.input)
		// const val = this.input.value;
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
	/*
	getItems(){
		return this.state.list.map((item,index)=>{
					
					//return (<li key={index} onClick={this.handleDel.bind(this,index)}>
					//	{item}
					//	</li>)
					
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
	*/
	render(){
		// console.log('App render')
		return (
			<div className='App'>
				<Row>
					<Col span={18}>
						<Input  size="large" onChange={this.handleInput} value={this.state.task}/>
					</Col>
					<Col span={6}>
						<Button type="primary" onClick={this.handleAdd} style={{width:100,height:40}}>提交</Button>
					</Col>
				</Row>
				{
					//<input ref={(input)=>{this.input = input}} style={{width:900}} onChange={this.handleInput} value={this.state.task}/>
					// <button className='btn' onClick={this.handleAdd}>提交</button>
				}
				
				<List
			      bordered
			      dataSource={this.state.list}
			      renderItem={(item,index) => (
			        <List.Item onClick={this.handleDel.bind(this,index)}>
			          {item}
			        </List.Item>
			      )}
			    />
			</div>)
	}
}

export default App