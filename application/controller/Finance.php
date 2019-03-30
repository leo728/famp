<?php


namespace app\api\controller;


use think\facade\Config;

class Finance extends Api
{
    public function payment(){
        $data = Config::get('app.payment');
        $this->result($data,200,'','json');
    }
    public function add_records(){
        echo '000';
        $this->result('',200,'','json');
    }
}