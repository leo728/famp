<?php
/**
 * Created by PhpStorm.
 * User: top-dante
 * Date: 2019/3/1
 * Time: 11:04
 */

namespace app\api\controller;


use think\facade\Cache;
use app\fa\model\Projects;

class Api extends Auth
{
    /**
     * 返回菜单数据
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function get_auth_menus(){
        $data = Cache::get('api_auth_menus');
        if(!$data){
            $model = new \app\fa\model\Authorize();
            $data = $model->where('status',1)->order('order','desc')->select();
            Cache::set('api_auth_menus',unlimitedForChild($data),0);
        }
        $this->result($data,200,'request is success','json');
    }

    /**
     * 请求项目列表数据
     * @throws \think\exception\DbException
     */
    public function get_projects_list(){
        $projects = new Projects();
        $data = $projects->getProjectsPage();
        $this->result($data,200,'请求成功','json');
    }

    /**
     * 获取项目状态
     */
    public function get_projects_status(){
        $projects = new Projects();
        $data = $projects->projectStatus;
        $this->result($data,200,'请求成功','json');
    }
}