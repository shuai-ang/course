import {CHANGE_ITEM,ADD_ITEM,DEL_ITEM,LOAD_DATA} from './actionTypes.js'
import {fromJS} from 'immutable'

const defaultState = fromJS({
	list:['吃饭','唱歌','跳舞','打豆豆'],
	task:''
})


export default (state=defaultState,action)=>{
	// console.log(action)
	if(action.type == CHANGE_ITEM){
		/*
		const newState = JSON.parse(JSON.stringify(state));
		newState.task = action.payload;
		return newState
		*/
		return state.set('task',action.payload)
	}
	if(action.type == ADD_ITEM){
		/*
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.task)
		newState.task = ''
		return newState
		*/
		const list = [...state.get('list')]
		list.push(state.get('task'))
		return state.merge({
			list,
			task:''
		})
	}
	if(action.type == DEL_ITEM){
		/*
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.payload,1)
		return newState
		*/
		const list = [...state.get('list')]
		list.splice(action.payload,1)
		return state.set('list',list)
	}
	if(action.type == LOAD_DATA){
		/*
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.payload
		return newState
		*/
		return state.set('list',action.payload)
	}
	return state
}