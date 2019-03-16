<?php
/**
 * Created by PhpStorm.
 * User: top-dante
 * Date: 2019/3/16
 * Time: 23:27
 */

namespace app\controller;


class Settings extends Base
{
    public function index(){
        $this->redirect(url('settings/baseinfo'));
    }
    public function baseinfo(){

    }
    public function manager(){
        return $this->fetch();
    }
    public function repass(){
        return $this->fetch();
    }
    public function uploader(){
        return $this->fetch();
    }
    public function keyt(){
        return $this->fetch();
    }

    public function personal(){
        return $this->fetch();
    }


}