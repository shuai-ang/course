// 匀速动画
function animate(obj,attr,target){
		clearInterval(obj.timer);
		var iSpeed = 0;
		obj.timer = setInterval(function(){
			var current = parseFloat(getComputedStyle(obj,false)[attr]);
			if(attr == 'opacity'){
				current = Math.round(current * 100);
			}
			if(current > target){
				iSpeed = -7;
			}else{
				iSpeed = 7;
			}
			if(Math.abs(target - current) < Math.abs(iSpeed)){
				if(attr == 'opacity'){
					obj.style[attr] = target/100;
				}else{
					obj.style[attr] = target +'px';
				}
				
				clearInterval(obj.timer);
			}else{
				if(attr == 'opacity'){
					obj.style[attr] = (current + iSpeed)/100;
				}else{
					obj.style[attr] = current + iSpeed+'px';
				}
				
			}
			
		},30)	
	}
//减速动画
function animate1(obj,attr,target){
		clearInterval(obj.timer);
		var iSpeed = 0;
		obj.timer = setInterval(function(){
			var current = parseFloat(getComputedStyle(obj,false)[attr]);
			if(attr == 'opacity'){
				current = Math.round(current*100);
			}
			iSpeed = (target - current)/10;
			iSpeed = iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			if(!iSpeed){
				clearInterval(obj.timer);
			}else{
				if(attr == 'opacity'){
					obj.style[attr]= (current+iSpeed)/100;
				}else{
					obj.style[attr] = current+iSpeed+'px';
				}
			}
		},30)
	}
//综合动画
function animate2(obj,attr,target,isLinear){
		//让动画默认就是匀速执行
		if(typeof isLinear == undefined){
			isLinear = true;
		}
		//防止开启多个定时器
		clearInterval(obj.timer);
		var iSpeed = 0;//定义速度（如果定义在定时器里边的话，每次都会定义一个变量，在这里只用定义一次）
		obj.timer = setInterval(function(){//开启定时器
			var isStop = false;//用来判断是否要关闭定时器
			var current  = parseFloat(getComputedStyle(obj,false)[attr]);//当前值
			if(attr == 'opacity'){//如果是透明度的话，要乘以100，方便计算
				current = Math.round(current *100);
			}
			if(isLinear){//执行匀速动画
				//匀速动画速度
				if(current < target){
					iSpeed = 7;
				}else{
					iSpeed = -7;
				}
				//匀速动画的结束条件
				if(Math.abs(target - current) < Math.abs(iSpeed)){
					if(attr == 'opacity'){//把匀速动画的结果直接调到目标值(只有匀速才有)
						obj.style[attr] = target/100;
					}else{
						obj.style[attr] = target + 'px';
					}
					isStop = true;//通过此变量决定是否停止动画
				}
			}else{//减速动画
				//减速动画速度
				iSpeed = (target - current)/10;
				iSpeed = iSpeed >0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				//减速动画的结束条件
				if(!iSpeed){
					isStop = true;//通过此变量决定是否停止动画
				}
			}
			if(isStop){//判断此变量，决定是否关闭定时器
				clearInterval(obj.timer);//关闭定时器
			}else{//不停止动画，继续执行
				if(attr == 'opacity'){
					obj.style[attr] = (current + iSpeed)/100;
				}else{
					obj.style[attr] = current + iSpeed +'px';
				}
			}
		},30)
	}
//多值动画
function animation(obj,options,isLinear,fnEnd){
		//让动画默认就是匀速执行
		if(typeof isLinear == undefined){
			isLinear = true;
		}
		//防止开启多个定时器
		clearInterval(obj.timer);
		var iSpeed = 0;//定义速度（如果定义在定时器里边的话，每次都会定义一个变量，在这里只用定义一次）
		obj.timer = setInterval(function(){//开启定时器
			var isStopAll = true;//当这个值为真时，关闭定时器，停止所有动画
			for(var attr in options){
				var current  = parseFloat(getComputedStyle(obj,false)[attr]);//当前值
				if(attr == 'opacity'){//如果是透明度的话，要乘以100，方便计算
					current = Math.round(current *100);
				}
				if(isLinear){//执行匀速动画
					//匀速动画速度
					if(current < options[attr]){
						iSpeed = 7;
					}else{
						iSpeed = -7;
					}
					//匀速动画的结束条件
					if(Math.abs(options[attr] - current) < Math.abs(iSpeed)){
						if(attr == 'opacity'){//把匀速动画的结果直接调到目标值(只有匀速才有)
							obj.style[attr] = options[attr]/100;
						}else{
							obj.style[attr] = options[attr] + 'px';
						}
					}else{
						isStopAll = false;//只要有一个值没有变化完毕，动画就不能停止（定时器就不能关闭）
					}
				}else{//减速动画
					//减速动画速度
					iSpeed = (options[attr] - current)/10;
					iSpeed = iSpeed >0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
					//减速动画的结束条件
					if(iSpeed){
						isStopAll = false;//只要有一个值没有变化完毕，动画就不能停止（定时器就不能关闭）
					}
				}
				if(isStopAll){//判断此变量，决定是否关闭定时器
					clearInterval(obj.timer);//关闭定时器
					typeof fnEnd == 'function' && fnEnd();//如果有传入函数的话，执行否则不执行
				}else{//不停止动画，继续执行
					if(attr == 'opacity'){
						obj.style[attr] = (current + iSpeed)/100;
					}else{
						obj.style[attr] = current + iSpeed +'px';
					}
				}
			}
			
		},30)
	}
function getScrollTop(){
	return window.pageYOffset ||  document.documentElement.scrollTop || document.body.scrollTop;
} 
function getScrollLeft(){
	return window.pageXOffset ||  document.documentElement.scrollLeft || document.body.scrollLeft;
} 
//碰撞检测
function checkBump(obj1,obj2){
		if((obj1.offsetLeft + obj1.offsetWidth) > obj2.offsetLeft
			&& (obj1.offsetTop + obj1.offsetHeight) > obj2.offsetTop
			&& (obj2.offsetLeft + obj2.offsetWidth) > obj1.offsetLeft
			&&  (obj2.offsetTop + obj2.offsetHeight) > obj1.offsetTop
			){
			return true;
		}else{
			return false;
		}
	}
//取中间随机数
function getRandom(min,max){
		return Math.round(min+(max-min)*Math.random());
	}