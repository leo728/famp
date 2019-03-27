<?php
/**
 * Created by PhpStorm.
 * User: top-dante
 * Date: 2019/3/26
 * Time: 12:50
 */

namespace app\api\controller;
use think\facade\Config;
use think\facade\Request;


class Projects extends Api
{
    /**
     * 请求项目数据
     * @throws \think\exception\DbException'
     */
    public function get_projects(){
        $project = new \app\api\model\Projects();
        $status = Request::get('status',0,'intval');
        if($status){
            $map[]= ['p.status','=',$status];
        }else{
            $map[]= ['p.status','<>',20];
        }

        $data = $project->getProjectsPage($map);
        $this->result($data,200,'请求成功','json');
    }

    /**
     * 获取项目紧急程度和项目状态
     */
    public function get_projects_level_status(){
        $status = Config::get('app.projectStatus');
        $level = Config::get('app.projectLevel');
        $this->result(['status'=>$status,'level'=>$level],200,'success','json');
    }
}