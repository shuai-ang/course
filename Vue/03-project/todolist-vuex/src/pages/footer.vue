<template>
    <div id="Footer">
       <input type="checkbox" v-model="allDone">{{totalDone}}/{{total}}
       <button @click="delSelect()">删除选中</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { SELECT_ALL,DEL_SELECT_DONE } from '../store/types.js'
    export default{
      name:'Footer',
      computed:{
        /*
        total:function(){
            return this.$store.getters.total
        },
        totalDone:function(){
            return this.$store.getters.totalDone
        },
        */
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters([
          'total',
          'totalDone',
          // ...
        ]),
        allDone:{
            get(){
                return this.$store.getters.allDone
            },
            set(value){
                // this.selectAll(value)
                this.$store.dispatch(SELECT_ALL,value)
            }
        }
      },
      methods:{
            delSelect:function(){
                if(window.confirm('您确定删除所选任务吗?')){
                    // this.delSelectDone()
                    this.$store.dispatch(DEL_SELECT_DONE)
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