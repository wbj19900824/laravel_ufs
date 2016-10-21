$(function(){
	var oHall = $(window).height();
	var oWall = $(window).width();
	
	var oHcon = $('.order-content');
	if(oHcon){
		var oHpo = $('.order-content').height();
		var oHpt = $('.order-menu').height();
		if(oHpo<oHpt){
			$('html').css('height','100%');
			$('body').css('height','100%');
		}
	}
	
	$('.order-leu-lia').click(function(){
		var oHidden = $(this).nextUntil('.order-leu-lia').css('display')
		if(oHidden == 'list-item'){
			$(this).nextUntil('.order-leu-lia').slideUp()
		}else{
			$(this).nextUntil('.order-leu-lia').slideDown()
		}
		
	});
	
	$('.order-cb-img').toggle(function(){
		$(this).css('backgroundPosition','0 0')
	},function(){
		$(this).css('backgroundPosition','0 -16px')
	});
	
	
	
	var oWcc =  window.screen.availWidth;
	var oHcc =  window.screen.availHeight;
	$('.or-main').height(oHall);
//	$('.or-main').width(oWcc);
	
	
	
	 var oRst = true;

		$('.ir_simg').click(function(){
			if(oRst == true){
				$(this).addClass('ir_simg01');
				oRst = false;
			}else{
				$(this).removeClass('ir_simg01')
				oRst = true;
			}
		
		});
		
		
		$('.dele-spd').click(function(){
			$(this).prev('input').val('');
			$(this).hide()
		});
		
		
		$('.dele-all').bind("keyup change",function(event){
			
			if($(this).val() != ''){
				$(this).next('span').show();
			}else{
				$(this).next('span').hide();
			}
		})
		
		var oWia = true;
		$('.or-wiwa').click(function(){
		if(oWia == true){
			$(this).css('backgroundPosition','0 0');
			oWia = false
		}else{
			$(this).css('backgroundPosition','0 -16px');
			oWia = true
		}
		});
		
		
//		
//			$(this).css('backgroundPosition','0 -16px');
//			$(this).parent().parent().prev().children('.role-all').css('backgroundPosition','0 -16px');
//		
		
		
		$('.role-dan').click(function(){
			var oCbp = $(this).css('backgroundPosition');
			if(oCbp == '0px 0px'){
				$(this).css('backgroundPosition','0 -16px');
				$(this).parent().parent().prev().children('.role-all').css('backgroundPosition','0 -16px');
			}else{
				$(this).css('backgroundPosition','0 0');
			}
//			
		});
		
		$('.role-all').toggle(function(){
			$(this).css('backgroundPosition','0 0');
			$(this).parent().next().children().children('.role-dan').css('backgroundPosition','0 0');
		},function(){
			$(this).css('backgroundPosition','0 -16px');
			$(this).parent().next().children().children('.role-dan').css('backgroundPosition','0 -16px');
		});
		
		
		$('.wiw-close').click(function(){
			$('.wiw-bj').hide()
			$('.wiw-cont').hide()
			$('.wiw-role-main').hide()
		});
		
		
		//
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
})

