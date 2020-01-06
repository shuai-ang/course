<template>
    <div id="Footer">
       <input type="checkbox">1/2
       <button>删除选中</button>
    </div>
</template>

<script>

    export default{
      name:'Footer',
      
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