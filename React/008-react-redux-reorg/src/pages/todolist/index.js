import React,{Component} from 'react'
// import store from './store/index.js'
import { connect } from 'react-redux'
import axios from 'axios'
import './index.css'
import { Input,Button,Row,Col,List, Typography } from 'antd';
import * as createActions from '../../store/createActions.js'
//容器组件
class Todolist extends Component{
	
	
	componentDidMount(){
		this.props.handleInit()
	}
	render(){
		const { task,list,handleInput,handleAdd,handleDel } = this.props;
		return (
			<div className='Todolist'>
				<Row>
					<Col span={18}>
						<Input  size="large" onChange={handleInput} value={task}/>
					</Col>
					<Col span={6}>
						<Button type="primary" onClick={handleAdd} style={{width:100,height:40}}>提交</Button>
					</Col>
				</Row>
				<List
			      bordered
			      dataSource={list}
			      renderItem={(item,index) => (
			        <List.Item onClick={()=>{handleDel(index)}}>
			          {item}
			        </List.Item>
			      )}
			    />
			</div>
		)
	}
}
const mapStateToProps = (state)=>{
	// console.log(state)
	return {
		list:state.list,
		task:state.task
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		handleInput:(ev)=>{
			const val = ev.target.value;
			
			dispatch(createActions.changeAction(val))
		},
		handleAdd:()=>{
			dispatch(createActions.addAction())
		},
		handleDel:(index)=>{
			dispatch(createActions.delAction(index))
		},
		handleInit:()=>{
			dispatch(createActions.getRequestLoadeDataAction())
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist)