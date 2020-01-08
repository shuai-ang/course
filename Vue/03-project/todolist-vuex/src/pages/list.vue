<template>
    <div id="List">
       <Item
       		v-for="(todo,index) in todos"
       		:key="index"
       		:todo="todo" 
       		:index="index"
       		:delTodo="delTodo"
       />
    </div>
</template>

<script>
	import Item from './item.vue'
    export default{
      name:'List',
      components:{
	      Item
      },
      props:{
      	todos:Array,
      	delTodo:Function
      }
    }
</script>

<style scoped>
    
</style>