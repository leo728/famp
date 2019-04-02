<?php
/**
 * Created by PhpStorm.
 * User: top-dante
 * Date: 2019/3/26
 * Time: 12:50
 */

namespace app\controller;
use app\model\Products;
use think\facade\Config;
use think\facade\Request;


class Projects extends Api
{
    /**
     * 请求项目数据
     * @throws \think\exception\DbException'
     */
    public function get_projects(){
        $project = new \app\model\Projects();
        $status = Request::get('status',0,'intval');
        $subject = Request::get('subject','');
        if($status){
            $map[]= ['p.status','=',$status];
        }else{
            $map[]= ['p.status','<>',20];
        }
        if($subject){
            $map[]= ['p.subject','like',"%$subject%"];
        }

        $data = $project->getProjectsPage($map);
        $this->result($data,200,'请求成功','json');
    }

    /**
     * 获取简单项目列表 用于收支添加和预览
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function get_simple_projects(){
        $project = new \app\model\Projects();
        $data = $project->getProjectsListSimple();
        $this->result($data,200,'success','json');
    }
    /**
     * 获取项目紧急程度和项目状态
     */
    public function get_projects_level_status(){
        $status = Config::get('app.projectStatus');
        $level = Config::get('app.projectLevel');
        $this->result(['status'=>$status,'level'=>$level],200,'success','json');
    }

    /**
     * 获取全部产品信息
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function get_products(){
        $pro = new Products();
        $data = $pro->getList();
        $this->result($data,200,'success','json');
    }

    /**
     * 获取产品报价分页
     * @throws \think\exception\DbException
     */
    public function get_products_page(){
        $pro = new Products();
        $data = $pro->getPage();
        $this->result($data,200,'success','json');
    }
}