const express = require('express')
const app = express()
const swig = require('swig')

app.use(express.static('public'))

//1.设置缓存
//开发阶段设置不走缓存
swig.setDefaults({
	  cache: false
	})
//2.配置应用模板
//第一个参数是模板名称,同时也是模板文件的扩展名
//第二个参数是解析模板的方法
app.engine('html', swig.renderFile);

//3.配置模板的存放目录
app.set('views', './views')

//4.注册模板引擎
app.set('view engine', 'html')

//5.渲染模板
app.get('/',(req,res)=>{

    //第一个参数是相对于模板目录的文件
    //第二个参数是传递给模板的数据
    res.render('index',{
    	title:"淘宝网",
    	name:"Sera",
    	age:18,
    	friends:["Tom","Leo","Peter","John","Jane"]
    })
})

app.get('/', function (req, res) {
  res.send('get request to the homepage')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))