<template>
    <div id="List">
       <Item
       		v-for="(todo,index) in this.$store.state.todos"
       		:key="index"
       		:todo="todo" 
       		:index="index"
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
      	todos:Array
      }
    }
</script>

<style scoped>
    
</style>