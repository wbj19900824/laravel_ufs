@extends('layouts.adminleft')

@section('content')
<ul class="orr-pos">
    <li><b>·</b><a href="#">首页</a></li>
    <li>></li>
    <li class="orr-now-a"><a href="#">加工厂信息管理</a></li>
</ul>
<ul class="order-sele-a">
    <li><a href="{{ url('/user/show-user-add') }}"><font class="order-img order-imgc order-imgf"></font>新增</a></li>
    <li class="order-sea-la"></li>
    <li><a href="#"><font class="order-img order-imgc order-imge"></font>修改</a></li>
    <li class="order-sea-la"></li>
    <li><a href="#"><font class="order-img order-imgc order-imgo"></font>刷新</a></li>
    <li class="order-sea-la"></li>
    <li><a href="#"><font class="order-img order-imgc order-imgw"></font>excel模版导入</a></li>
    <li class="order-sea-la"></li>
    <li><a href="#"><font class="order-img order-imgc order-imgw"></font>加工厂信息模版导入</a></li>
</ul>
<!---->
<div class="order-mianb ">
    <ul class="mb-ula">
        <li class="mb-ula-la"><label>产品名称：</label><input type="text" value="" /></li>
        <li class="mb-ula-la"><label>编码：</label><input type="text" value="" /></li>
        <li class="mb-ula-la"><label>公司名称：</label><input type="text" value="" /></li>
        <li class="mb-ula-la"><label>联系人：</label><input type="text" value="" /></li>
        <li class="mb-ula-lb"><a href="#">查询</a></li>
    </ul>
<div class="order-contb ovw">
<ul class="order-cb-ula">
<li class="cba-la"></li>
<li class="cba-lb">编号</li>
<li class="cba-lc">昵称</li>
<li class="cba-ld">邮件</li>
<li class="cba-le">地址</li>
<li class="cba-lc">联系电话</li>

<li class="cba-lh">状态</li>
<li class="cba-li">更新日期</li>
</ul>

@foreach($users as $user)
    <ul class="order-cb-ula order-cb-ulb order-cb-come">
    <li class="cba-la"><font class="order-cb-img"></font></li>
    <li class="cba-lb"><samp>{{$user->id}}</samp></li>
    <li class="cba-lc"><samp>{{$user->name}}</samp></li>
    <li class="cba-ld">{{$user->email}}</li>
    <li class="cba-le">{{$user->address}}</li>
    <li class="cba-lc">{{$user->telphone}}</li>
    <li class="cba-lh"><span>可用</span></li>
    <li class="cba-li"><samp>{{$user->created_at->format('Y-m-d')}}</samp></li>
    </ul>
@endforeach
   
</div>
<ul class="order-page">

    {!!$users->links()!!}

    <li class="or-page-la"><a href="#"> &lt;上一页  </a></li>
    <li class="or-page-lb"><a href="#">1</a></li>
    <li class="or-page-lb page-orh"><a href="#">2</a></li>
    <li class="or-page-lb"><a href="#">3</a></li>
    <li class="or-page-lb"><a href="#">4</a></li>
    <li class="or-page-lb"><a href="#">5</a></li>
    <li class="or-page-lc"><a href="#">···</a></li>
    <li class="or-page-lb"><a href="#">20</a></li>
    <li class="or-page-la"><a href="#">下一页  &gt;</a></li>
    <li class="or-page-lc or-page-ld">共20页</li>
    <li class="or-page-lc or-page-lf">到第<input value="" type="text"/>页</li>
    <li class="or-page-lg"><a href="#">确定</a></li>
</ul>
</div>

@endsection
