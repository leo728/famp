<?php
namespace app\controller;

use think\facade\Cache;
use think\facade\Session;

class Index extends Base
{

    public function index()
    {
        return view('/index');
    }
    public function components(){
        return view('/components');
    }

    public function logout(){
        Session::clear();
        $this->result(url('account/login'),200,'您已经成功退出系统，正在为您跳转到登录页面!');
    }

    /**
     * 清除全站缓存
     */
    public function clear_cache(){
        Cache::clear();
        $this->result('',200,'缓存清除成功，正在为您刷新页面');
    }
}
