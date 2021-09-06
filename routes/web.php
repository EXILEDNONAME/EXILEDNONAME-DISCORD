<?php

Auth::routes();

Route::get('/', function () { return view('pages.frontend.index'); });
Route::get('/home', 'HomeController@index')->name('home');


Route::get('/dashboard', 'Backend\DashboardController@index')->name('dashboard.index');
Route::get('/dashboard/file-manager', 'Backend\DashboardController@filemanager')->name('dashboard.file-manager');
Route::get('/dashboard/help-center', 'Backend\DashboardController@help_center')->name('dashboard.help-center');
Route::get('/dashboard/logout', 'Backend\DashboardController@logout')->name('dashboard.logout');
Route::get('/lang/{language}', 'LocalizationController@switch')->name('localization.switch');

// SYSTEM
require __DIR__.'/backend/system/general.php';
require __DIR__.'/backend/system/dummy.php';
require __DIR__.'/backend/system/management.php';
