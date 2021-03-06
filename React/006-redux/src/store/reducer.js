import {CHANGE_ITEM,ADD_ITEM,DEL_ITEM,LOAD_DATA} from './actionTypes.js'

const defaultState = {
	list:['吃饭','唱歌','跳舞','打豆豆'],
	task:''
}
/*
	1.reducer是一个纯函数(有固定的输入就有固定的输出)
	2.reducer必须操作并返回newState,不能够操作state
	state由store管理,因为store中的state由所有组件共享,
	store通过newState改变自身的state数据,getState方法获得的state数据是store中的state
*/
export default (state=defaultState,action)=>{
	// console.log(action)
	if(action.type == CHANGE_ITEM){
		//错误写法
		// state.task = action.payload
		const newState = JSON.parse(JSON.stringify(state));
		newState.task = action.payload;
		// newState.task = action.payload + Date.now();
		return newState
	}
	if(action.type == ADD_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.task)
		newState.task = ''
		return newState
	}
	if(action.type == DEL_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.payload,1)
		return newState
	}
	if(action.type == LOAD_DATA){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.payload
		return newState
	}
	return state
}