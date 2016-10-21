<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>联合利华产品</title>
	<link rel="stylesheet" href="{{URL::asset('/css/main.css')}}">
	<link rel="stylesheet" href="{{URL::asset('/css/demo.css')}}">
	<link rel="stylesheet" href="{{URL::asset('/css/branch.css')}}" />
	<script type="text/javascript" src="{{URL::asset('/js/jquery.min.js')}}"></script>
	<script type="text/javascript" src="{{URL::asset('/js/order.js')}}" ></script>
</head>
<body>
	<div class="order-mian">
			<div class="order-menu">
				<div class="orme-logo"><img src="../images/order_1.jpg"/></div>
				<ul class="order-left-menu">
					<li class="order-leu-lia"><font class="order-img order-imgp fl"></font><span class="fl">系统基本信息管理</span><font class="order-img order-imgv fr"></font></li>
					<li class="order-leu-lib"><a href="#"><span>系统用户信息管理</span></a></li>
					<li class="order-leu-lib order-leu-lhover"><a href="#"><span>加工厂信息管理</span></a></li>
					<li class="order-leu-lib"><a href="#"><span>餐饮连锁信息管理</span></a></li>
					<li class="order-leu-lib"><a href="#"><span>产品基础资料管理</span></a></li>
					<li class="order-leu-lib"><a href="#"><span>系统参数管理</span></a></li>
					<li class="order-leu-lia"><font class="order-img order-imgx fl"></font><span class="fl">信息审核管理</span><font class="order-img order-imgv fr"></font></li>
					<li class="order-leu-lib"><a href="#"><span>销售人员与餐饮连锁</span></a></li>
					<li class="order-leu-lib"><a href="#"><span>角色功能菜单权限</span></a></li>
					<li class="order-leu-lia"><font class="order-img order-imgj fl"></font><span class="fl">系统权限管理</span><font class="order-img order-imgv fr"></font></li>
					<li class="order-leu-lib"><a href="#"><span>注册人员信息审核</span></a></li>
					<li class="order-leu-lib"><a href="#"><span>评论信息审核</span></a></li>
				</ul>
			</div>
			<div class="order-content">
				<div class="orr-a">
					<ul class="fl">
						<li class="orf-l"><a href="#"><font class="order-img order-imga"></font>查看前台</a></li>
						<li>|</li>
					</ul>
					<ul class="fr">
						<li>|</li>
						<li><a href="#">您好，管理员 柳梦枫</a></li>
						<li>|</li>
						<li class="order-lia"><a href="#"><font class="order-img order-imgb"></font>退出</a></li>
					</ul>
				</div>			
						@yield('content')					
				<!---->
			</div>
		</div>
		<!--弹窗-->
		
		@yield('hidebox')
		
</body>
</html>