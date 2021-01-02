<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use  App\Http\Controllers\CategoryController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('/categories',CategoryController::class);
//Route::put('/categories/{id}',[CategoryController::class,'update'])->where('id','[0-9]+');