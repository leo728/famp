<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// +----------------------------------------------------------------------
// | 应用设置
// +----------------------------------------------------------------------

return [
    // 应用地址
    'app_host'              => '',
    // 应用Trace（环境变量优先读取）
    'app_trace'             => false,
    // 应用的命名空间
    'app_namespace'         => '',
    // 是否启用路由
    'with_route'            => true,
    // 是否启用事件
    'with_event'            => true,
    // 自动多应用模式
    'auto_multi_app'        => true,
    // 应用映射（自动多应用模式有效）
    'app_map'               => [],
    // 域名绑定（自动多应用模式有效）
    'domain_bind'           => [],
    // 默认应用
    'default_app'           => 'index',
    // 默认时区
    'default_timezone'      => 'Asia/Shanghai',
    // 是否开启多语言
    'lang_switch_on'        => false,
    // 默认语言
    'default_lang'          => 'zh-cn',
    // 默认验证器
    'default_validate'      => '',

    // 默认跳转页面对应的模板文件
    'dispatch_success_tmpl' => app()->getThinkPath() . 'tpl/dispatch_jump.tpl',
    'dispatch_error_tmpl'   => app()->getThinkPath() . 'tpl/dispatch_jump.tpl',

    // 异常页面的模板文件
    'exception_tmpl'        => app()->getThinkPath() . 'tpl/think_exception.tpl',

    // 错误显示信息,非调试模式有效
    'error_message'         => '页面错误！请稍后再试～',
    // 显示错误信息
    'show_error_msg'        => false,
    //支付方式配置
    'payment' => [
        ['payment_id' => 1, 'payment_name' => '现金','icon'=>'/static/icon/cash.svg'],
        ['payment_id' => 2, 'payment_name' => '微信','icon'=>'/static/icon/wxpay.svg'],
        ['payment_id' => 3, 'payment_name' => '支付宝','icon'=>'/static/icon/alipay.svg'],
        ['payment_id' => 4, 'payment_name' => '对公','icon'=>'/static/icon/company.svg'],
        ['payment_id' => 5, 'payment_name' => '刷卡','icon'=>'/static/icon/cardpay.svg'],
        ['payment_id' => 6, 'payment_name' => '其他','icon'=>'/static/icon/other.svg']
    ],
    //项目紧急程度配置
    'projectLevel'=>[
        ['level'=>1,'level_name'=>'非常紧急','color_style'=>'am-danger'],
        ['level'=>2,'level_name'=>'紧急','color_style'=>'am-warning'],
        ['level'=>3,'level_name'=>'一般','color_style'=>'am-primary'],
        ['level'=>4,'level_name'=>'可延后','color_style'=>'am-success'],
    ],
    //项目状态对照表
    'projectStatus'=>[
        ['status'=>1,'status_name'=>'已接单'],
        ['status'=>2,'status_name'=>'制作中'],
        ['status'=>3,'status_name'=>'施工中'],
        ['status'=>4,'status_name'=>'待收款'],
        ['status'=>5,'status_name'=>'已完结']
    ]
];
