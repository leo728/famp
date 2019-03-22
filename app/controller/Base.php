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
use think\facade\View;

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
        $this->assign(['menus' => $menus, 'menu' => $location]);
    }

    /**
     * 纠结之 5.1版本的 assign数据分享
     * 继承 View类 全局调用
     * @param array $var
     */
    public function assign(array $var=[]){
        View::assign($var);
    }

    /**
     * 纠结模板输出，杜绝使用助手函数
     * @param string $template
     * @return string
     */
    public function fetch($template=''){
        return View::fetch($template);
    }
}