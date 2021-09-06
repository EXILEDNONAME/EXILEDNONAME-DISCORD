<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function(Request $request) {
    return $request->user();
});

Route::post('login', 'Auth\LoginController@login');
//
// Route::apiResource('/test', 'Api\Dummy\Table\GeneralController');
