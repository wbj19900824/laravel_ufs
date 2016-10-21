$(function(){
	$("#mess").mouseover(function(){
		$(this).find('.me01-ab').css('color','#ea5a07');
		$("#mess_hide").show();
		$(this).find('.me01-ab').children('span').find('img').attr('src','../images/more02.png');
		$(this).addClass("hover-me");
	});
	$("#mess").mouseleave(function(){
		// $(this).find('.me01-ab').removeClass('newscolor');
		$(this).find('.me01-ab').css('color','#666666');
		$("#mess_hide").hide();
		$(this).find('.me01-ab').children('span').find('img').attr('src','../images/more.png');
		$(this).removeClass("hover-me");
	});
	$(".fir-a").mouseover(function(){
		$(this).find('div').show();
		$(this).find('.tubiao01').addClass("hevor")
		$(this).parent().css({"background-color": "#fff"});	
		$(this).find('.jiantou-a').css('color','#ea5a07');
	});
	$(".fir-a").mouseleave(function(){
		$(this).find('div').hide();
		$(this).parent().css({"background-color": "#f2f2f2"});
		$(this).find('.jiantou-a').css('color','#333333');
	});

	$(".hover-a01").mouseover(function(){
		$(this).find(".tubiao01").removeClass("tubiao01").addClass("hover-tb01");
	});
	$(".hover-a01").mouseleave(function(){
		$(this).find(".hover-tb01").removeClass("hover-tb01").addClass("tubiao01");
	});

	$(".hover-a02").mouseover(function(){
		$(this).find(".tubiao02").removeClass("tubiao02").addClass("hover-tb02");
	});
	$(".hover-a02").mouseleave(function(){
		$(this).find(".hover-tb02").removeClass("hover-tb02").addClass("tubiao02");
	});
	$(".hover-a03").mouseover(function(){
		$(this).find(".tubiao03").removeClass("tubiao03").addClass("hover-tb03");
	});
	$(".hover-a03").mouseleave(function(){
		$(this).find(".hover-tb03").removeClass("hover-tb03").addClass("tubiao03");
	});
	$(".hover-a04").mouseover(function(){
		$(this).find(".tubiao04").removeClass("tubiao04").addClass("hover-tb04");
	});
	$(".hover-a04").mouseleave(function(){
		$(this).find(".hover-tb04").removeClass("hover-tb04").addClass("tubiao04");
	});
     

    $(".mr_frbox").mouseover(function(){
		$(this).find('.float01').show();
		$(this).find('.float02').show();
    });
    $(".mr_frbox").mouseleave(function(){
		$(this).find('.float01').hide();
		$(this).find('.float02').hide();
    });

	$("#nayang").mouseover(function(){
		$(this).find('.mid-a').show();
		$(this).find('.rnav-b').removeClass("rnav-b").addClass("rnav-c");
	});
	$("#nayang").mouseleave(function(){
		$(this).find('.mid-a').hide();
		$(this).find('.rnav-c').removeClass("rnav-c").addClass("rnav-b");
	});

		$("#zuji").mouseover(function(){
		$(this).find('.mid-a').show();
		$(this).find('.rnav-b').removeClass("rnav-b").addClass("rnav-c");
	});
	$("#zuji").mouseleave(function(){
		$(this).find('.mid-a').hide();
		$(this).find('.rnav-c').removeClass("rnav-c").addClass("rnav-b");
	});


	$("#dianhua").mouseover(function(){
		$(this).find('.mid-kefu').show();
		$(this).find('.rnav-b').removeClass("rnav-b").addClass("rnav-d");
	});
	$("#dianhua").mouseleave(function(){
		$(this).find('.mid-kefu').hide();
		$(this).find('.rnav-d').removeClass("rnav-d").addClass("rnav-b");
	});
		$("#kefu").mouseover(function(){
		$(this).find('.mid-kefu').show();
		$(this).find('.rnav-b').removeClass("rnav-b").addClass("rnav-d");
	});
	$("#kefu").mouseleave(function(){
		$(this).find('.mid-kefu').hide();
		$(this).find('.rnav-d').removeClass("rnav-d").addClass("rnav-b");
	});
		$("#liuyan").mouseover(function(){
		$(this).find('.mid-kefu').show();
		$(this).find('.rnav-b').removeClass("rnav-b").addClass("rnav-d");
	});
	$("#liuyan").mouseleave(function(){
		$(this).find('.mid-kefu').hide();
		$(this).find('.rnav-d').removeClass("rnav-d").addClass("rnav-b");
	});
	$("#zhiding").mouseover(function(){
		$(this).find(".bbt-hide").hide();
		$(this).find(".bbt-foot").show();
	});
	$("#zhiding").mouseleave(function(){
		$(this).find(".bbt-hide").show();
		$(this).find(".bbt-foot").hide();
	})
	
//	$('.bottom p').css('opacity','0');
	$(window).on('scroll',function(){
		
//		var oh = $(window).height();
		var osh =$(document).scrollTop();
		if(osh>0){$('.b-right p').css('opacity','1'); }
		else{$('.b-right p').css('opacity','0');}
	
	});
	
	$('.b-right').click(function(){
	 $('html,body').animate({scrollTop:0}, 'slow');
	});	
	
	
	
	$('input, textarea').placeholder();
	

$('.r_ps02 .sp01').mouseover(function(){
		$(this).removeClass('sp01').addClass('sp01h');
	});
	$('.r_ps02 .sp01').mouseleave(function(){
		$(this).removeClass('sp01h').addClass('sp01');
	})
	$('.r_ps02 .sp02').mouseover(function(){
		$(this).removeClass('sp02').addClass('sp02h');
	});
	$('.r_ps02 .sp02').mouseleave(function(){
		$(this).removeClass('sp02h').addClass('sp02');
	});
	
	
	$('.pr-hot').mousemove(function(){
		$(this).children('span').children('img').attr('src','../images/jiantou_2.png')
		$('.new-show').show();
	});
	
	$('.pr-ula').mousemove(function(){
		$('.new-show').hide();
		$('.pr-hot').children('span').children('img').attr('src','../images/jiantou.png');
	});
	
	
	$('.pr-op').mouseleave(function(){
		$('.new-show').hide();
		$('.pr-hot').children('span').children('img').attr('src','../images/jiantou.png');
	})
	
	
	$('.new-show').mouseleave(function(){
		$('.new-show').hide();
		$('.pr-hot').children('span').children('img').attr('src','../images/jiantou.png');
	});

$('.regi_cl').click(function(){
	$(this).parent().hide();
});
 
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


$('.new-plice').focus(function(){
	$(this).parent('p').next('p').children('span').show();
});

$('.new-plice').blur(function(){
	$(this).parent('p').next('p').children('span').hide();
});


$('.new-plice').focus(function(){
	$(this).parent('li').next('li').children('span').show();
});

$('.new-plice').blur(function(){
	$(this).parent('li').next('li').children('span').hide();
});

$('.new-plice').focus(function(){
	$(this).parent('p').parent('li').next('li').children('span').show();
});

$('.new-plice').blur(function(){
	$(this).parent('p').parent('li').next('li').children('span').hide();
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


$('.sele-reg').focus(function(){
		$(this).next('.lo_site_dv').show();
		$(this).css('background','url("../images/shang.png") no-repeat right');
  	})
  	$('.sele-reg').blur(function(){
		$(this).next('.lo_site_dv').hide();
		$(this).css('background','url("../images/xia.png") no-repeat right');
  	})

$('.audit').click(function(){
	$('.audit-ww').show()
});

      var oFh = $('.fprint-fr').height();
      $('.fprint-fl').height(oFh);
     if($('.fp-fl-sp').hasClass('rec-fl-sp')){
     	 var oFhp = oFh-162;
     	$('.fp-fl-sp').height(oFhp);
     }else{
     	 var oFhp = oFh-42;
         $('.fp-fl-sp').height(oFhp);
     }
     	if($('.fprint-mian').length<2){
     		$('.fp-fl-spc').hide()
     	}else if($('.fprint-mian').length<3){
     		$('.fp-fl-spc-2').hide()
     	}
     $('.fprint-mian').each(function(index){
     	
     	if(index == 0){
     		var fp = $(this).height();
     		var fph = fp - 60;
     			$('.fp-fl-spb').height(fph);
     		var fpt = fp + 104;
     		    $('.fp-fl-spc').css('top',fpt)
     	}else if(index == 1){
     		var fp = $(this).height();
     		if($(this).hasClass('rec-content')){
     			$('.fp-fl-spb').height(556);
     		}
     		var fp2 = $(this).height();
     		var fpt = fp2 + fp + 104 * 2;
     		    $('.fp-fl-spc-2').css('top',fpt)
     	}
     
     });
     
     var ODtext = $('.eval-area');
		ODtext.keyup(function(){
			var oNumber =  ODtext.val().replace(/[\r\n]/g,"").replace(/[ ]/g,"").length;
			var oSur = 400-oNumber;
			if(oSur<0){var ods = ODtext.text().substring(0,400);oSur = 0;ODtext.text(ods);}
			
		});

     
     $('.evala-spa').click(function(){
     	$(this).parent('p').css('backgroundPosition','-1px -366px')
     });
     $('.evala-spb').click(function(){
     	$(this).parent('p').css('backgroundPosition','-1px -333px')
     });
      $('.evala-spc').click(function(){
     	$(this).parent('p').css('backgroundPosition','-1px -300px')
     });
     
     $('.evala-spd').click(function(){
     	$(this).parent('p').css('backgroundPosition','-1px -267px')
     });
     
      $('.evala-spe').click(function(){
     	$(this).parent('p').css('backgroundPosition','-1px -234px')
     });
     
     $('.fprint-dete').click(function(){
     	$('.wge-main').show()
     });
     
     $('.wmg-cle').click(function(){
     	$('.wge-main').hide();
     });
     
      $('.wmg-ula').click(function(){
     	$('.wge-main').hide();
     });
     $('.not-sbul-bli').click(function(){
			if($(this).hasClass('not-sbul-blia')){
				return false;
			}else{
				$('.not-sbul-bli').removeClass('not-sbul-blia');
				$(this).addClass('not-sbul-blia');
			}
		});
		
		$('.personal-cle').click(function(){
			$(this).parent().parent().parent().hide();
		});
		
     $('.change-info').click(function(){
			$('.wno-main-b').show()
		});
	$('.change-info-b').click(function(){
			$('.wge-main-a').show()
		});
		$('.add-user-info').click(function(){
			$('.add-info-ww').show()
		});
		$('.amend-user').click(function(){
			$('.rep-info-ww').show()
		});
		$('.cancle-order').click(function(){
			$('.cancel-main').show();
		});
		$('.cancle-cle').click(function(){
			$('.cancel-main').hide();
		});
		$('.customer-cle').click(function(){
			$('.customer-main').hide();
		});
		$('.menu-show-pca').click(function(){
			$('.showow-main').show()
		});
		
		$('.customer').click(function(){
			$('.customer-main').show()
		});
		
		$('.customer-qx').click(function(){
			$('.customer-main').hide()
		});
		
		$('.showow-psa').click(function(){
			if($(this).hasClass('menu-show-psa-d')){
				$(this).removeClass('menu-show-psa-d');
				$(this).nextAll().removeClass('menu-show-psa-d');
			}else{
				$(this).addClass('menu-show-psa-d');
			    $(this).prevAll().addClass('menu-show-psa-d');
			}
			
		});
		
     var Oleaveow = $('.leaveow-area');
		Oleaveow.keyup(function(){
			var oNumber =  Oleaveow.val().replace(/[\r\n]/g,"").replace(/[ ]/g,"").length;
			var oSur = 400-oNumber;
			if(oSur<0){var ods = Oleaveow.text().substring(0,400);oSur = 0;Oleaveow.text(ods);}
			
		});
		
		$('.leave-message').click(function(){
			$('.leaveow-main').show()
		});
		
		var Omess = $('.leaveow-area');
		Omess.keyup(function(){
			var oNumber =  Omess.val().replace(/[\r\n]/g,"").replace(/[ ]/g,"").length;
			var oSur = 400-oNumber;
			if(oSur<0){var ods = Omess.text().substring(0,400);oSur = 0;Omess.text(ods);}
			
		});
		
		$('.show-mess-num').click(function(){
			$(this).parent().parent().parent().next().show()
		});
		
})
