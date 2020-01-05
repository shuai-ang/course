<template>
    <div id="header">
       <h2>todoList</h2>
       <input type="text">
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

      }
    }
</script>

<style>
    #app{
        width:600px;
        margin:50px auto;
    }
</style>