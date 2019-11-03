;(function(){
	var $input = $('.todoInput');
	$input.on('keydown',function(ev){
		if(ev.keyCode == 13){
			$.ajax({
				url:'/add',
				type:'get',
				dataType:'JSONP',
				data:{
					task:$input.val()
				},
				success:function(data){
					console.log(data)
				},
				err:function(err){
					console.log(err)
				}
			})
		}
	})
})(jQuery)