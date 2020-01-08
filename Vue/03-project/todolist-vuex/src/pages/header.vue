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

    export default{
      name:'Header',
      data(){
        return {
            task:''
        }
      },
      props:{
        addTodo:Function
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
            this.addTodo(todo)
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