<?php

// PROFILE
Route::group([
  'as' => 'dashboard.profile.',
  'prefix' => 'dashboard/profile',
  'namespace' => 'Backend',
], function(){
  Route::get('about', 'ProfileController@about')->name('about');
  Route::get('change-password', 'ProfileController@change_password')->name('change-password');
  Route::post('update-password', 'ProfileController@update_password')->name('update-password');
  Route::get('account-information', 'ProfileController@account_information')->name('account-information');
  Route::get('timeline', 'ProfileController@timeline')->name('timeline');
  Route::resource('/', 'ProfileController')->parameters(['' => 'id']);
});
