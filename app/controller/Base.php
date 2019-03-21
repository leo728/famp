<?php
/**
 * Created by PhpStorm.
 * User: top-dante
 * Date: 2019/3/16
 * Time: 19:18
 */

namespace app\controller;

use app\model\Authorize;
use think\Controller;
class Base extends Controller
{
    /**
     * 全局继承
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function initialize()
    {
        $authorized = new Authorize();
        $menus = $authorized->getList(2);
        $location = $authorized->getLocation();
        view('',['menus' => $menus, 'menu' => $location]);
    }
}