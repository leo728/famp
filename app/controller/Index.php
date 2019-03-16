<?php
namespace app\controller;

use think\facade\Cache;

class Index extends Base
{

    public function index()
    {
        return $this->fetch('/index');
    }
    public function components(){
        return $this->fetch('/components');
    }

    /**
     * 清除缓存
     */
    public function clear_cache(){
        Cache::clear();
        $this->result('',403,'缓存清除成功，正在为您刷新页面');
    }
}
