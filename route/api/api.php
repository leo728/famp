<?php
/**
 * Created by PhpStorm.
 * User: top-dante
 * Date: 2019/3/26
 * Time: 12:52
 */
use think\facade\Route;

Route::get('get_projects', 'projects/get_projects');
Route::get('get_projects_level_status', 'projects/get_projects_level_status');
