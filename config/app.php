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
    // 应用名称
    'app_name'                => '',
    // 应用地址
    'app_host'                => '',
    // 应用调试模式
    'app_debug'               => false,
    // 应用Trace
    'app_trace'               => false,
    // 默认时区
    'default_timezone'        => 'Asia/Shanghai',
    // 是否开启多语言
    'lang_switch_on'          => false,
    // 默认语言
    'default_lang'            => 'zh-cn',
    // 默认验证器
    'default_validate'        => '',

    // 默认跳转页面对应的模板文件
    'dispatch_success_tmpl'   => app()->getThinkPath() . 'tpl/dispatch_jump.tpl',
    'dispatch_error_tmpl'     => app()->getThinkPath() . 'tpl/dispatch_jump.tpl',

    // 异常页面的模板文件
    'exception_tmpl'          => app()->getThinkPath() . 'tpl/think_exception.tpl',

    // 错误显示信息,非调试模式有效
    'error_message'           => '页面错误！请稍后再试～',
    // 显示错误信息
    'show_error_msg'          => false,
    // 异常响应输出类型
    'exception_response_type' => 'html',
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
        ['status'=>1,'status_name'=>'已接单','color'=>'am-badge-primary'],
        ['status'=>2,'status_name'=>'制作中','color'=>'am-badge-secondary'],
        ['status'=>3,'status_name'=>'施工中','color'=>'am-badge-secondary'],
        ['status'=>4,'status_name'=>'待收款','color'=>'am-badge-warning'],
        ['status'=>5,'status_name'=>'已完结','color'=>'am-badge-success']
    ]
];
