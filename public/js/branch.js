$(function(){
	
	
	$('.click-sele-all').click(function(){
		var oBp = $(this).css('backgroundPosition');
		if(oBp == '0px 0px'){
			$('.click-sele-all').css('backgroundPosition','0px -16px')
			$('.click-sele').css('backgroundPosition','0px -16px');
		}else{
			$('.click-sele-all').css('backgroundPosition','0px 0px')
			$('.click-sele').css('backgroundPosition','0px 0px');
		}
	});
	
	$('.cartm-h3-a').children('.click-sele').click(function(){
		var oBp = $(this).css('backgroundPosition');
		if(oBp == '0px 0px'){
			$(this).css('backgroundPosition','0px -16px');
			$('.click-sele-all').css('backgroundPosition','0px -16px');
			$(this).parent('.cartm-h3-a').next('p').next('.cartm-cont-c').find('.click-sele').css('backgroundPosition','0px -16px');
		  }else{
		  	$(this).css('backgroundPosition','0px 0px');
		  	$(this).parent('.cartm-h3-a').next('p').next('.cartm-cont-c').find('.click-sele').css('backgroundPosition','0px 0px');
		  }
	});
	
	$('.cartm-cont-c').find('.click-sele').click(function(){
		var oBp = $(this).css('backgroundPosition');
		if(oBp == '0px 0px'){
			$(this).css('backgroundPosition','0px -16px');
			$('.click-sele-all').css('backgroundPosition','0px -16px');
			$(this).parents('.cartm-cont-c').prevAll('.cartm-h3-a').children('.click-sele').css('backgroundPosition','0px -16px');
		  }else{
		  	$(this).css('backgroundPosition','0px 0px');
		  	
		  }
	});
	
	
	//加减
	
	var oSvalue = $('.cartm-ulb-lif').children('input');
            oSvalue.each(function(){
            	var oTe =$(this).val();
            	if(oTe == 1){
            		$(this).prev('i').css('backgroundPosition','0px -86px')
            	}
            });
	
	$('.cartm-ulb-ia').click(function(){
		$(this).next().next('i').css('backgroundPosition','0px -50px');
		var os = $(this).next('input').val();
		os = parseInt(os)-1;
//		console.log(os)
		if(os>1){
		$(this).next('input').val(os);
		}else if(os=1){
			$(this).next('input').val(os);
			$(this).css('backgroundPosition','0px -86px')
		}
	});
	
	$('.cartm-ulb-ib').click(function(){
		$(this).prev().prev('i').css('backgroundPosition','-36px -50px');
		var os = $(this).prev('input').val();
		os = parseInt(os)+1;
//		console.log(os)
		if($(this).parent().next('li').hasClass('max-num')){
//			console.log(222)
            var oPd = $(this).parent().next('li').children('samp').text();
//          console.log(oPd)
			$(this).prev('input').val(os);
            if(os>=oPd){
            	$(this).css('backgroundPosition','-36px -86px');
            	$(this).prev('input').val(oPd);
            	return false;
//          	console.log(333)
            }

		}else{
			$(this).prev('input').val(os);
		}
		
	});
	
	//隐藏
	
	$('.notice-ula-lib').click(function(){
		$('.notice-ula').hide()
	});
	

	//产品选择
	
	$('.pd-sulb-lic').click(function(){
		$(this).addClass('pd-sulb-lik').siblings('.pd-sulb-lic').removeClass('pd-sulb-lik');
	});
	
	
	//免费拿样
	
	$('.take-sample-dl dd').click(function(){
		$('.take-sample-bj').hide();
		$('.take-sample-cont').hide();
		$('.take-sample-main').hide();
	});
	
	$('.pd-s-dtc').click(function(){
		$('.take-in').each(function(){
			var oVl = $(this).val();
			var oVm = $(this).attr('max');
//			console.log(oVm)
			if(oVl != 0 && oVl != oVm){
//				console.log(oVl)
				$(this).prev('button').css('backgroundPosition','-36px -50px');
				$(this).next('button').css('backgroundPosition','0px -50px');
			}else if(oVl == oVm){
//				console.log(oVl)
				$(this).prev('button').css('backgroundPosition','-36px -50px');
				$(this).next('button').css('backgroundPosition','-36px -86px');
			}
		});

		$('.take-sample-bj').show();
		$('.take-sample-cont').show();
		$('.take-sample-main').show();
	});
	//add
	$('.take-borb').click(function(){
		//max
		var oImax = $(this).prev('input').attr('max');
		$(this).prev().prev().css('backgroundPosition','-36px -50px');
//		console.log(oImax)
		//val
		var oIval = $(this).prev('input').val();
		oIval = parseInt(oIval) + 1;
		$(this).prev('input').val(oIval);
		if(oIval>=oImax){
			$(this).css('backgroundPosition','-36px -86px');
			$(this).prev('input').val(oImax);
		}
		
//		console.log(oIval)
	});
	//minus
	
	$('.take-bora').click(function(){
		$(this).next().next().css('backgroundPosition','0px -50px');
		var oIval = $(this).next('input').val();
		oIval = parseInt(oIval) - 1;
		console.log(oIval)
		if(oIval > 0){
//			$(this).css('backgroundPosition','-0px -86px');
			$(this).next('input').val(oIval);
//			console.log(33)
//			return false;
		}else if(oIval == 0){
				$(this).css('backgroundPosition','-0px -86px');
				$(this).next('input').val(oIval);
		}
	});
	
	
	$('.sxc-fot').toggle(function(){
		$(this).css('backgroundPosition','0px 0px');
	},function(){
		$(this).css('backgroundPosition','0px -16px');
	});
	
	$('.sxc-lfp-bb').click(function(){
		$('.sxc-lfc-xl').show();
	});
	$('.pdm-sxc-lif').mouseleave(function(){
		$('.sxc-lfc-xl').hide();
	});
	
	
		//订单
		$('.cul-lia span').click(function(){
			$(this).next('.cul-lop').show();
		});
		
		$('.cul-lia').mouseleave(function(){
			$(this).children('.cul-lop').hide()
		});
		
		$('.gds-ulc').each(function(){
			var oHgc = $(this).height()-20;
			$(this).children('.sul-clic').height(oHgc);
		});
		//消息中心
		$('.mge-imgb').click(function(){
			var oPc = $(this).parent().parent();
			if(oPc.hasClass('mge-cnow')){
				$(this).parent().parent().removeClass('mge-cnow');
				$('.mge-imge').css('backgroundPosition','0px -16px');
			}else{
				$(this).parent().parent().addClass('mge-cnow')
			}
			
		});
		
		$('.mge-imge').toggle(function(){
			$(this).css('backgroundPosition','0px 0px');
			$('.mge-ulc').each(function(){
				$(this).addClass('mge-cnow');
			});
		},function(){
			$(this).css('backgroundPosition','0px -16px');
		$('.mge-ulc').each(function(){
				$(this).removeClass('mge-cnow');
			});
		});
		$('.wmg-cle').click(function(){
			$('.wge-main').hide()
		});
		
	
})
function setTab(name,cursel,n){
			  for(i=1;i<=n;i++){
			  var menu=document.getElementById(name+i);
			  var con=document.getElementById("con"+name+i);
			  menu.className=i==cursel?"hover":"";
			  con.style.display=i==cursel?"block":"none";
			} 
		  }