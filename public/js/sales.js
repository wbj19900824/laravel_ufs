$(function(){
	//消息中心
		$('.not-imgb').click(function(){
			var oPc = $(this).parent().parent();
			if(oPc.hasClass('not-cnow')){
				$(this).parent().parent().removeClass('not-cnow');
				$('.not-imge').css('backgroundPosition','0px -16px');
			}else{
				$(this).parent().parent().addClass('not-cnow')
			}
			
		});
		
		$('.not-imge').toggle(function(){
			$(this).css('backgroundPosition','0px 0px');
			$('.not-ulc').each(function(){
				$(this).addClass('not-cnow');
			});
		},function(){
			$(this).css('backgroundPosition','0px -16px');
		$('.not-ulc').each(function(){
				$(this).removeClass('not-cnow');
			});
		});

		

// 保存修改一键清空内容
		$('.infor-reinc').keyup(function(){
			if($(this).val() != ""){
				$(this).next("span").show();
			}else{
				$(this).next("span").hide();
			}
		})

		$('.infor-del').click(function(){
			$(this).prev('input').val("");
			$(this).hide();
		})

		$('.upload input').keyup(function(){
			if($(this).val() != ""){
				$(this).next("span").show();
			}else{
				$(this).next("span").hide();
			}
		})

		
		// 购物车更改用户
		$('.shop-imga').toggle(function(){
			$(this).css('backgroundPosition','0px 0px');
			// $('.not-ulc').each(function(){
			// 	$(this).addClass('not-cnow');
			// });
		},function(){
			$(this).css('backgroundPosition','0px -16px');
		// $('.not-ulc').each(function(){
		// 		$(this).removeClass('not-cnow');
		// 	});
		});
		
		
		
		
})