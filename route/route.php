<?php

//projects router
Route::get('api/get_projects_level_status','projects/get_projects_level_status');
Route::get('api/get_projects','projects/get_projects');
Route::get('api/get_projects_simple','projects/get_simple_projects');
Route::get('api/get_products','projects/get_products');
Route::get('api/get_products_page','projects/get_products_page');

//user router
Route::get('api/get_user','user/get_user_list');

//finance router
Route::get('api/get_payment','finance/payment');

Route::post('api/add_records','finance/add_records')->allowCrossDomain();

