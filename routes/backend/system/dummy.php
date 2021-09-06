<?php

// DUMMY - INVOICES
Route::group([
  'as' => 'system.dummy.invoices.',
  'prefix' => 'dashboard/dummy/invoices',
  'namespace' => 'Backend\System\Dummy',
], function(){
  Route::get('status-done/{id}', 'InvoiceController@status_done')->name('status-done');
  Route::get('status-pending/{id}', 'InvoiceController@status_pending')->name('status-pending');
  Route::get('enable/{id}', 'InvoiceController@enable')->name('enable');
  Route::get('disable/{id}', 'InvoiceController@disable')->name('disable');
  Route::get('status/{id}/{slug}', 'InvoiceController@status')->name('status');
  Route::get('delete/{id}', 'InvoiceController@delete')->name('delete');
  Route::get('deleteall', 'InvoiceController@deleteall')->name('deleteall');
  Route::resource('/', 'InvoiceController')->parameters(['' => 'id']);
});

// DUMMY - TABLE GENERALS
Route::group([
  'as' => 'system.dummy.table.generals.',
  'prefix' => 'dashboard/dummy/table/generals',
  'namespace' => 'Backend\System\Dummy\Table',
], function(){
  Route::get('status-done/{id}', 'GeneralController@status_done')->name('status-done');
  Route::get('status-pending/{id}', 'GeneralController@status_pending')->name('status-pending');
  Route::get('enable/{id}', 'GeneralController@enable')->name('enable');
  Route::get('disable/{id}', 'GeneralController@disable')->name('disable');
  Route::get('status/{id}/{slug}', 'GeneralController@status')->name('status');
  Route::get('delete/{id}', 'GeneralController@delete')->name('delete');
  Route::get('deleteall', 'GeneralController@deleteall')->name('deleteall');
  Route::resource('/', 'GeneralController')->parameters(['' => 'id']);
});

// DUMMY - TABLE RELATIONS
Route::group([
  'as' => 'system.dummy.table.relations.',
  'prefix' => 'dashboard/dummy/table/relations',
  'namespace' => 'Backend\System\Dummy\Table',
], function(){
  Route::get('status-done/{id}', 'RelationController@status_done')->name('status-done');
  Route::get('status-pending/{id}', 'RelationController@status_pending')->name('status-pending');
  Route::get('enable/{id}', 'RelationController@enable')->name('enable');
  Route::get('disable/{id}', 'RelationController@disable')->name('disable');
  Route::get('status/{id}/{slug}', 'RelationController@status')->name('status');
  Route::get('delete/{id}', 'RelationController@delete')->name('delete');
  Route::get('deleteall', 'RelationController@deleteall')->name('deleteall');
  Route::resource('/', 'RelationController')->parameters(['' => 'id']);
});
