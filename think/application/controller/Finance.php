<?php


namespace app\controller;


use think\facade\Config;
use think\facade\Request;

class Finance extends Api
{
    public function payment(){
        $data = Config::get('app.payment');
        $this->result($data,200,'','json');
    }
    public function add_records(){
        $finance  = new \app\model\Finance();
        $status = $finance->createItem();
        if($status){
            $this->result('',200,'收支记录添加成功','json');
        }else{
            $this->result('',500,'未知内部错误，请重试或是联系技术支持','json');
        }

    }
}