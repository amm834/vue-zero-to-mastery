<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\CategoryController;
use  App\Http\Controllers\AuthController;

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::group([
 'prefix' => 'auth'
], function() {
 Route::post('/users', [AuthController::class, 'register']);
});

Route::apiResource('/categories', CategoryController::class);