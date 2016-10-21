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
    <div class="or-main">
    	<div class="or-login-cont login_ind">
    		<img src="../images/or_logo.jpg" alt="" class="or-img-log"/>
    		<h3 class="or-tit">联合利华-后台管理系统</h3>
    		<div class="or-name ind_r">
    			<form method="POST" action="{{ url('/user/login') }}">
                        {!! csrf_field() !!}

                
                <p class="ir_p02"><span class="ir_sp2a"></span>
					<input type="text" placeholder="用户名/手机号/邮箱" name="login" class="dele-all" />
					<span class="ir_sp2b dele-spd"></span>
    			</p>
    	
                @if($errors->has('login'))
                <span style="float:left; color:red;">{{ $errors->first('login') }}</span>          
                @endif      			
    
				<p class="ir_p03"><span class="ir_sp3a"></span>
					<input type="password" placeholder="密码" name="password" class="dele-all" />
					<span class="ir_sp3b dele-spd"></span>
				</p>
				 @if($errors->has('password'))
                <span style="float:left; color:red;">{{ $errors->first('password') }}</span>          
                @endif      			
    
				<p class="ir_p04"><span class="ir_sp4a">
					<b class="ir_simg"></b>自动登录</span>
					<span class="ir_sp4b"><a href="#">忘记密码？</a></span>
				</p>
				  <button type="submit" class="ir_p05"><a>登 录</a></button>
				 </form>
				<!-- <p class="ir_p05"><a href="#">登 录</a></p> -->
    		</div>
    	</div>
    </div>
</body>
</html>