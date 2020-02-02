<template>
    <div 
    id="Item"
    :style="{backgroundColor:bgColor}"
    @mouseenter="handleShow(true)"
    @mouseleave="handleShow(false)"
    >
       <input type="checkbox" v-model="todo.done">
       <span>{{todo.task}}</span>
       <button 
	       v-if="isShow"
	       @click="handleDel()"
       >删除</button>
    </div>
</template>

<script>
    import { DEL_TODO } from '../store/types.js'
    export default{
      name:'Item',
      data(){
	      return {
			  bgColor:'#fff',
			  isShow:false
	      	}
      },
      methods:{
      	  handleShow(flag){
      	  	this.bgColor = flag ? '#ccc' : '#fff'
      	  	this.isShow = flag 
      	  },
      	  handleDel:function(){
      	  	if(window.confirm('您确定删除该任务吗?')){
      	  		this.$store.dispatch(DEL_TODO,this.index)
      	  	}
      	  	
      	  }
      },
      props:{
      	  todo:Object,
      	  index:Number
      }
    }
</script>

<style scoped>
    #Item{
	width: 100%;
	height: 34px;
	line-height: 34px;
	padding-left: 15px;
	margin-top: 15px;
	border:1px dashed purple;
	box-sizing: border-box;
    }
    #Item input{
	width: 18px;
	height: 18px;
    vertical-align: middle;
    }
    button{
    float: right;
    margin-top: 5px;
    }
</style>