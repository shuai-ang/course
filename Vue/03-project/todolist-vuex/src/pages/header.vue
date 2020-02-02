<template>
    <div id="Header">
       <h2>TodoList</h2>
       <input 
         type="text"
         placeholder="请输入任务名"
         v-model="task"
         @keyup.enter="handleAdd()" 
       >
    </div>
</template>

<script>
    import { ADD_TODO } from '../store/types.js'
    export default{
      name:'Header',
      data(){
        return {
            task:''
        }
      },
      methods:{
        handleAdd(){
            // console.log(this.task)
            //1.校验数据
            var task = this.task.trim()
            if(!task){
                alert("请输入任务名")
                return
            }
            //2.封装任务对象
            var todo = {
                task:task,
                done:false
            }
            //3.将任务对象添加到数组中
            // console.log(this.$store)
            this.$store.dispatch(ADD_TODO,todo)
            //4.清空输入框
            this.task = ''
        }
      }
    }
</script>

<style>
    #Header{
      text-align: center;
    }
    input{
      width: 100%;
      height: 45px;
      padding-left: 15px;
      box-sizing: border-box;
    }
</style>