@extends('layouts.adminleft')

@section('hidebox')
<div class="wiw-bj"></div>
<div class="wiw-cont" style="display: block;">
<form method="POST" action="{{ url('/user/user-add') }}">
    {!! csrf_field() !!}

    <h3 class="wiw-h3">新增后台用户<span class="wiw-close"></span></h3>
    <dl class="wiw-in">       
        <dt class="upload"><label>昵称：</label><input type="text" name="name"/><span class="infor-del"></span></dt>
        <dt class="upload"><label>邮件：</label><input type="text" name="email"/><span class="infor-del"></span></dt>
        <dt class="upload"><label>密码：</label><input type="password" name="password"/><span class="infor-del"></span></dt>   
        <dt class="upload"><label>重复密码：</label><input type="password" name="password_confirmation"/><span class="infor-del"></span></dt> 
        <dt class="upload"><label>电话：</label><input type="text" name="telphone"/><span class="infor-del"></span></dt>        
        <dt class="wiw-inlast upload"><label>地址：</label><input type="text" name="address"/><span class="infor-del"></span></dt>
        <dt class="wiw-inac"><font class="order-over or-wiwa"></font><span>账号可用</span>
       
        </dt>
    </dl>
    <ul class="wiw-two-a">
       
        <li class="ww-ta-b">          
             <input type="submit" value="保存" style="width:100%;height:100%;" />
        </li>
       <!--  <li class="ww-ta-a">
             <input type="button" value="取消" style="width:100%;height:100%;" />
        </li> -->
    </ul>
</form>
</div>


<!-- <div class="chage-cont">            
        <div class="wiw-cont">
        <h3 class="wiw-h3">Excel模版导入<span class="wiw-close"></span></h3>
        <div class="chage-model">
            <span class="model">选择模版：</span><input type="text"><span class="look">浏览</span>
        </div>
        <ul class="wiw-two-a">
            <li class="ww-ta-a"><a href="#">取消</a></li>
            <li class="ww-ta-b"><a href="#">导入</a></li>
        </ul>
    </div>      
</div> -->

@endsection
