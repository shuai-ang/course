<template>
    <div id="Footer">
       <input type="checkbox" v-model="allDone">{{totalDone}}/{{total}}
       <button @click="delSelect()">删除选中</button>
    </div>
</template>

<script>

    export default{
      name:'Footer',
      props:{
        todos:Array,
        selectAll:Function,
        delSelectDone:Function
      },
      computed:{
        total:function(){
            return this.todos.length
        },
        totalDone:function(){
            return this.todos.reduce((total,item)=>{
                if(item.done){
                    total = total + 1
                }
                return total
            },0)
        },
        allDone:{
            get(){
                return this.totalDone == this.total && (this.total != 0)
            },
            set(value){
                this.selectAll(value)
            }
        }
      },
      methods:{
            delSelect:function(){
                if(window.confirm('您确定删除所选任务吗?')){
                    this.delSelectDone()
                }
            }
      }
    }
</script>

<style>
    #Footer{
    width: 100%;
	height: 34px;
	line-height: 34px;
	padding-left: 15px;
	margin-top: 15px;
	box-sizing: border-box;
    }
    #Footer input{
	width: 18px;
	height: 18px;
    vertical-align: middle;
    }
    button{
    float: right;
    margin-top: 5px;
    }
</style>