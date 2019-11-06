class Controller{
	index(req,res,...args){
		res.setHeader('Content-type','text/html;charset="utf-8"');
		res.end('<a href="/Item/index">go todolist</a>')
	}
}

module.exports = new Controller()