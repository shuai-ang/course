import React,{Component} from 'react'
import './App.css'
import { Input,Button,Row,Col,List, Typography } from 'antd';
//UI组件
/*
class AppUI extends Component{
	render(){
		return (
			<div className='App'>
				<Row>
					<Col span={18}>
						<Input  size="large" onChange={this.props.handleInput} value={this.props.task}/>
					</Col>
					<Col span={6}>
						<Button type="primary" onClick={this.props.handleAdd} style={{width:100,height:40}}>提交</Button>
					</Col>
				</Row>
				<List
			      bordered
			      dataSource={this.props.list}
			      renderItem={(item,index) => (
			        <List.Item onClick={()=>{this.props.handleDel(index)}}>
			          {item}
			        </List.Item>
			      )}
			    />
			</div>
		)
	}
}
*/
//无状态组件
const AppUI = (props)=>{
	const { task,list,handleInput,handleAdd,handleDel } = props;
	return (
		<div className='App'>
			<Row>
				<Col span={18}>
					<Input  size="large" onChange={props.handleInput} value={props.task}/>
				</Col>
				<Col span={6}>
					<Button type="primary" onClick={props.handleAdd} style={{width:100,height:40}}>提交</Button>
				</Col>
			</Row>
			<List
		      bordered
		      dataSource={props.list}
		      renderItem={(item,index) => (
		        <List.Item onClick={()=>{props.handleDel(index)}}>
		          {item}
		        </List.Item>
		      )}
		    />
		</div>
	)
}

export default AppUI