<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * The attributes that are mass assignable.
     *  可以批量插入的变量
     * @var array
     */
    protected $fillable=['name','email','password','telphone','address'];
}
