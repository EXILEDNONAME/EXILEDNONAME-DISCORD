<?php

Route::group([
  'as' => 'system.management.role.',
  'prefix' => 'dashboard/management/roles',
  'namespace' => 'Backend\System\Management',
], function () {
  Route::get('deleteall', 'RoleController@deleteall')->name('deleteall');
  Route::get('/', 'RoleController@index');
  Route::get('create', 'RoleController@create');
  Route::post('/', 'RoleController@store');
  Route::get('{id}/edit', 'RoleController@edit');
  Route::patch('{id}', 'RoleController@update');
  Route::get('{id}', 'RoleController@show');
  Route::delete('/{id}','RoleController@destroy');
  Route::get('enable/{id}', 'RoleController@enable');
  Route::get('disable/{id}', 'RoleController@disable');
  Route::get('status-done/{id}', 'RoleController@status_done');
  Route::get('status-pending/{id}', 'RoleController@status_pending');
  Route::get('status/{id}/{slug}', 'RoleController@status')->name('status');
  Route::get('delete/{id}', 'RoleController@delete')->name('delete');
});

Route::group([
  'as' => 'system.management.user.',
  'prefix' => 'dashboard/management/users',
  'namespace' => 'Backend\System\Management',
], function () {
  Route::get('deleteall', 'UserController@deleteall')->name('deleteall');
  Route::get('/', 'UserController@index');
  Route::get('create', 'UserController@create');
  Route::post('/', 'UserController@store');
  Route::get('{id}/edit', 'UserController@edit');
  Route::patch('{id}', 'UserController@update');
  Route::get('{id}', 'UserController@show');
  Route::delete('/{id}','UserController@destroy');
  Route::get('enable/{id}', 'UserController@enable');
  Route::get('disable/{id}', 'UserController@disable');
  Route::get('status-done/{id}', 'UserController@status_done');
  Route::get('status-pending/{id}', 'UserController@status_pending');
  Route::get('status/{id}/{slug}', 'UserController@status')->name('status');
  Route::get('delete/{id}', 'UserController@delete')->name('delete');
});
