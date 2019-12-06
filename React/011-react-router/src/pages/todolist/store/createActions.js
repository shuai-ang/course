import axios from 'axios'
import * as types from './actionTypes.js'

export const changeAction = (val)=>({
	type:types.CHANGE_ITEM,
	payload:val
})

export const addAction = ()=>({
	type:types.ADD_ITEM
})

export const delAction = (index)=>({
	type:types.DEL_ITEM,
	payload:index
})

const getLoadInitAction = (data)=>({
	type:types.LOAD_DATA,
	payload:data
})

/*错误写法
export const getLoadInitAction = ()=>{
	axios.get('http://127.0.0.1:3000')
	.then(result=>{
		return ({
			type:LOAD_DATA,
			payload:result.data
		})
	})
	.catch(err=>{
		console.log(err)
	})
}
*/

export const getRequestLoadeDataAction = ()=>{
	return (dispatch,getState)=>{
		axios.get('http://127.0.0.1:3000')
		.then(result=>{
			dispatch(getLoadInitAction(result.data))
		})
		.catch(err=>{
			console.log(err)
		})
	}
}