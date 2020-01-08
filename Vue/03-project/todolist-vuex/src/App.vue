<template>
    <div id="app">
       <Header :addTodo="addTodo"/>
       <List 
           :todos="todos"
           :delTodo="delTodo"
       />
       <Footer 
           :todos="todos"
           :selectAll="selectAll"
           :delSelectDone="delSelectDone"
       />
    </div>
</template>

<script>
    import Header from './pages/header.vue'
    import List from './pages/list.vue'
    import Footer from './pages/footer.vue'

    export default{
      name:'App',
      components:{
          Header,
          List,
          Footer
      },
      data(){
          return {
              todos:[
                  {
                      task:'吃饭',
                      done:false
                  },
                  {
                      task:'游泳',
                      done:false
                  },
                  {
                      task:'散步',
                      done:false
                  }
              ]
          }
      },
      methods:{
         addTodo:function(todo){
            this.todos.unshift(todo)
         },
         delTodo:function(index){
            this.todos.splice(index,1)
         },
         selectAll:function(value){
            this.todos.forEach((item)=>{
                item.done = value
            })
         },
         delSelectDone:function(){
            this.todos = this.todos.filter((item)=>item.done != true)
         }
      }
    }
</script>

<style>
    #app{
        width:600px;
        margin:50px auto;
    }
</style>