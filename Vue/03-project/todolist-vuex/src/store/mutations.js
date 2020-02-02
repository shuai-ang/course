//唯一更改state的方法
//mutation必须是同步函数
import { ADD_TODO,DEL_TODO,SELECT_ALL,DEL_SELECT_DONE } from './types.js'
export default {
	[ADD_TODO](state,todo){
		state.todos.unshift(todo)
	},
	[DEL_TODO](state,index){
		state.todos.splice(index,1)
	},
	[SELECT_ALL](state,value){
		state.todos.forEach((item)=>{
            item.done = value
        })
	},
	[DEL_SELECT_DONE](state){
		state.todos = state.todos.filter((item)=>item.done != true)
	}
}