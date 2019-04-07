<?php
namespace app\model;

use think\facade\Cache;
use think\facade\Config;
use think\facade\Request;
use think\Model;
use think\Validate;

class Projects extends Model
{
    /**
     * 项目状态和项目紧急程度 储存配置
     * @var
     */
    public $projectStatus,$projectLevel;
    /**
     * 初始化读取配置状态和项目紧急状态
     */
    private function getConf()
    {
        $this->projectStatus = Config::get('app.projectStatus');
        $this->projectLevel = Config::get('app.projectLevel');
    }

    protected $rules=[
        'subject'=>'require',
        'customer'=>'require',
        'customer_pm'=>'require',
    ];
    protected $message =[
        'subject.require'=>'项目名称不能空',
        'customer.require'=>'客户名称不能为空',
        'customer_pm.require'=>'客户负责人不能为空',
    ];

    /**
     * 获取项目详情
     * @param $projectId
     * @return array|null|\PDOStatement|string|Model
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function getProject($projectId){
        $this->getConf();
        $data = $this->where('id',$projectId)->find();
        $data['status_name'] = $this->projectStatus[$data['status']-1]['status_name'];
        $member = new Member();
        $pm = $member->where('uid',$data['pm_id'])->column('username');
        $data['pm'] = $pm[0];
        $finance = new Finance();
        $map[] = ['f.pid','=',$projectId];
        $data['records'] = $finance->getFinancePage($map);

        return $data;
    }

    /**
     * 查询项目分页
     * @param $map
     * @return \think\Paginator
     * @throws \think\exception\DbException
     */
    public function getProjectsPage($map='',$rows=15){
        $this->getConf();
        $data = $this->alias('p')
            ->join('member m','p.pm_id = m.uid','LEFT')
            ->field('p.id,p.subject,p.price,p.level,p.customer,p.dateline,p.end_time,p.status,m.username,p.pm_id')
            ->where($map)
            ->order('p.id','desc')->paginate($rows);

        foreach ($data as $key=>$vaule){
            $data[$key]['statusValue'] = $this->projectStatus[$vaule['status']-1];
            $data[$key]['levelValue'] = $this->projectLevel[$vaule['level']-1];
            $data[$key]['dateline_d'] = date('Y-m-d',$vaule['dateline']);
            $data[$key]['end_time_d'] = date('Y-m-d',$vaule['end_time']);
            $data[$key]['firstName'] = mb_substr($vaule['subject'],0,1);
            $data[$key]['percent'] = ceil($vaule['status'] / 5 * 100);
        }

        return $data;
    }

    /**
     * 获取固定条数列表
     * @param array $map
     * @param int $limit
     * @return array|\PDOStatement|string|\think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function getProjectsList($map=[],$limit=5){
        $this->getConf();
        $data = $this->alias('p')
            ->join('member m','p.pm_id = m.uid','LEFT')
            ->field('p.id,p.subject,p.price,p.level,p.customer,p.dateline,p.end_time,p.status,m.username,p.pm_id')
            ->where($map)
            ->order('p.id','desc')->limit($limit)->select();
        foreach ($data as $key=>$vaule){
            $data[$key]['percentage'] = ceil($vaule['status']/9*100);
            $data[$key]['statusValue'] = $this->projectStatus[$vaule['status']-1];
            $data[$key]['levelValue'] = $this->projectLevel[$vaule['level']-1];
        }

        return $data;
    }

    /**
     * 获取简单的项目列表
     * @return array|mixed|\PDOStatement|string|\think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     * @throws \think\exception\DbException
     */
    public function getProjectsListSimple(){
        $data = Cache::get('ProjectsListSimple');
        if(!$data) {
            $data = $this->field('id,subject')
                ->where('status','<>','5')
                ->order('id', 'desc')
                ->limit(20)
                ->select();
            Cache::set('ProjectsListSimple',$data,0);
        }
        return $data;
    }

    /**
     * 添加项目
     */
    public function createProject(){
        $data = Request::post();
        $validate = new Validate();
        $validate->rule($this->rules)->message($this->message);
        if(!$validate->check($data)){
            return result(403,$validate->getError());
        }
        $data = $this->completeData($data);
        $result = $this->insert($data);
        if($result){
            Cache::rm('ProjectsListSimple');
            return result(200,'项目添加成功，正在为您返回列表页面',url('projects/index'));
        }else{
            return result(500,'项目添加失败，请刷新重试或是联系技术支持');
        }

    }

    /**
     * 重新组合项目字段存储
     * @param $data
     * @return mixed
     */
    private function completeData($data){
        $data['dateline'] = strtotime($data['dateline']);
        $data['end_time'] = strtotime($data['end_time']);
        $data['hash'] = guid();
        return $data;
    }
    public function edProjectStatus(){
        $data = Request::post();
        $ret = $this->where('id',$data['id'])->setField('status',$data['status']);
        if($ret){
            return result(200,'更新成功');
        }else{
            return result(500,'更新失败');
        }
    }

    public function overView(){

    }
}