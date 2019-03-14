<?php
/**
 * Created by PhpStorm.
 * User: top-dante
 * Date: 2019/3/14
 * Time: 22:44
 */

namespace app\controller;


class Projects extends Index
{
    public function index()
    {
       return $this->fetch();
    }
}