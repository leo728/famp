<?php
/**
 * Created by PhpStorm.
 * User: top-dante
 * Date: 2019/3/28
 * Time: 16:05
 */

namespace app\controller;

use app\model\Member;

class User extends Api
{
    /**
     * 获取用户数据
     * @throws \think\exception\DbException
     */
    public function get_user_list(){
        $member = new Member();
        $data = $member->getUserList();
        $this->result($data,200,'success','json');
    }
}