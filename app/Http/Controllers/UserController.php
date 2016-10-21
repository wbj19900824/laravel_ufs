<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Models\User;
use Auth;
use DB;


class UserController extends Controller
{
    //定义登录认证成功之后的跳转路径
    protected $redirectTo = '/home';

    //定义退出后跳转到的页面
    protected $redirectAfterLogout = '/login';

    //用户登录页
    public function getLogin(){
    	
    	return view('admin.userlogin');
    }

    //用户登录
    public function postLogin(Request $request){

        //验证数据
        $this->validate($request, [
            'login' => 'required',
            'password' => 'required|min:6',
        ]);

    	$login=$request->input('login');
        $password=$request->input('password');

        //判断是否是邮件
        $field = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'other';
        if($field=='other'){
            //判断是否是手机号码
            $field = filter_var($login, FILTER_VALIDATE_REGEXP,array("options"=>array("regexp"=>"/^([0-9]{11})?$/"))) ? 'telphone' : 'name';
        }

        $flag=Auth::attempt([ $field => $login, 'password' => $password]);

        if($flag){ //登录成功
             return redirect('/user/user-lists'); 
        }else{ //登录失败
            return redirect()->back();
        }
       
    }

    //用户列表
    public function getUserLists(){

        $users = User::paginate(1);
         //$users = DB::table('users')->paginate(15);
        return view('admin.userlists')->with('users',$users);
    }

    //增加后台用户 显示
    public function getShowUserAdd(){
        return view('admin.useradd');
    }

    //增加后台用户 增加
    public function postUserAdd(Request $request){
         //验证数据
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'telphone' => 'required|numeric',
            'address' => 'required|max:160',
            'password' => 'required|confirmed|min:6',
        ]);

       $user=User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'telphone' => $request->input('telphone'),
            'address' => $request->input('address'),
            'password' => bcrypt( $request->input('password')),
            ]);
       //dd($user);
       if($user){
            //成功
            return redirect('/user/user-lists'); 
       }else{
            //失败
            return redirect()->back();
       }


    }
}
