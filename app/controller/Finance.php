<?php
/**
 * Created by PhpStorm.
 * User: top-dante
 * Date: 2019/3/18
 * Time: 14:39
 */

namespace app\controller;


class Finance extends Base
{
    public function index(){

        return $this->fetch();
    }
}