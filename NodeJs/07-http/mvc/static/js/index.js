;(function(){
	var $input = $('.todoInput');
	$input.on('keydown',function(ev){
		if(ev.keyCode == 13){
			$.ajax({
				url:'/Item/add',
				type:'post',
				dataType:'json',
				data:{
					task:$input.val()
				},
				success:function(result){
					const data = result.data;
					if(result.code == 0){
						var $dom = $(`<li class="item" data-id="${data.id}">${data.task}</li>`)
						$('.list').append($dom);
						$input.val('');
					}
					// console.log(result)
				},
				error:function(err){
					console.log(err)
				}
			})
		}
	})

	//处理删除逻辑
	$('.list').on('click','.item',function(){
		var $this = $(this);
		$.ajax({
			url:"/Item/del/"+$this.data('id'),
			dataType:'json',
			success:function(data){
				if(data.code == 0){
					$this.remove()
				}else{
					console.log(data.message)
				}
			},
			error:function(err){
				console.log(err)
			}
		})
	})
})(jQuery)