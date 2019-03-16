<?php
/**
 * Created by PhpStorm.
 * User: top-dante
 * Date: 2019/3/16
 * Time: 23:35
 */

namespace app\controller;


use think\ViewController;

class Account extends ViewController
{
    public function login(){
        return $this->fetch();
    }

}