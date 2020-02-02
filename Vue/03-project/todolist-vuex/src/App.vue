<template>
    <div id="app">
       <Header/>
       <List/>
       <Footer/>
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
    }
</script>

<style>
    #app{
        width:600px;
        margin:50px auto;
    }
</style>