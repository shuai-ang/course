//组件中用由this.$store.dispatch方法来派发action,action中用commit来提交mutation
//action中可以包含异步操作
import { ADD_TODO,DEL_TODO,SELECT_ALL,DEL_SELECT_DONE } from './types.js'
export default {
	[ADD_TODO]({commit},todo){
		commit(ADD_TODO,todo)
	},
	[DEL_TODO]({commit},index){
		commit(DEL_TODO,index)
	},
	[SELECT_ALL]({commit},value){
		commit(SELECT_ALL,value)
	},
	[DEL_SELECT_DONE]({commit}){
		commit(DEL_SELECT_DONE)
	}
}